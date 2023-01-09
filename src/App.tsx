import React from "react";
import "./App.css";
import { createICS } from "./createICS";
//import { parse } from "node:path/win32";
declare global {
  interface Navigator {
    msSaveBlob?: (blob: any, defaultName?: string) => boolean;
  }
}

const downloadCSV = (output: string) => {
  const now = new Date();
  const hour = ("0" + now.getHours()).slice(-2);
  const minute = ("0" + now.getMinutes()).slice(-2);
  const second = ("0" + now.getSeconds()).slice(-2);
  const fileName = `${hour}-${minute}-${second}${"twinc.ics"}`;

  if (window.navigator.msSaveBlob) {
    window.navigator.msSaveBlob(
      new Blob([output], { type: "text/plain" }),
      fileName
    );
    window.location.reload();
  } else {
    let a = document.createElement("a");
    a.href = URL.createObjectURL(new Blob([output], { type: "text/plain" }));
    a.download = fileName;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    window.location.reload();
    return true;
  }
};

const onFileStateChanged = async (
  event: React.ChangeEvent<HTMLInputElement>,
  ifDeadlinesExcluded: boolean
) => {
  if (event.currentTarget.files !== null) {
    const file = (event.currentTarget as HTMLInputElement).files![0];
    if (!file) {
      window.alert("ファイルが選択されていません");
      return;
    }

    if (!file.name.endsWith(".csv")) {
      window.alert("CSVファイルをアップロードしてください");
      return;
    } else
      createICS(file, ifDeadlinesExcluded).then((ICSFile) => {
        if (ICSFile) downloadCSV(ICSFile);
      });
  }
};

function App() {
  const ifDeadlinesExcluded = React.useRef<HTMLInputElement>(null);

  return (
    <div className="App">
      <h1>TwinC</h1>
      <p>TWINSまたはKdBもどきのCSVファイルを選択してください</p>
      <h4>詳しい使い方は下にスクロールして、Helpを参照してください</h4>
      <div id="selectedFiles"></div>
      <label id="fileUpload">
        ファイル選択
        <input
          type="file"
          id="fileUpload"
          accept=".csv"
          onChange={(e) =>
            onFileStateChanged(e, !!ifDeadlinesExcluded.current?.checked)
          }
        ></input>
      </label>
      <br />
      <input
        id="includeDeadlines"
        type="checkbox"
        name="includeDeadlines"
        ref={ifDeadlinesExcluded}
      />
      <label htmlFor="includeDeadlines">
        事前登録・履修登録締切日を追加しない
      </label>
      <span className="notice">
        <span className="warn">
          <p>
            生成したICSファイルは新しく作ったカレンダーにインポートしてください！
          </p>
        </span>
        <p>
          テスト期間中は授業によって予定が変更されることがあります。気をつけてください
        </p>
        <p>
          モジュールの期間は
          <a
            href="https://www.tsukuba.ac.jp/campuslife/calendar-school/pdf/2022-undergrad-grad-tsukuba.pdf"
            target="_blank"
            rel="noopener"
          >
            学年暦
          </a>
          に基づいています
        </p>
        <p>祝日に授業は登録されません</p>
        <p>通年授業は現在登録に対応していません</p>
        <p>
          学年暦に表示されている振替には対応していますが、それ以外の振替には対応していません
        </p>
      </span>
    </div>
  );
}

export default App;
