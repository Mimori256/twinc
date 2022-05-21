import React from "react";
import "./App.css";
//import { parse } from "node:path/win32";
import kdb from "./assets/kdb.json";
import parseCSV from "./parse";

declare global {
  interface Navigator {
    msSaveBlob?: (blob: any, defaultName?: string) => boolean;
  }
}

let interval: NodeJS.Timeout;

const downloadCSV = (output: string) => {
  clearInterval(interval);
  output += "END:VCALENDAR";

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
  } else {
    let a = document.createElement("a");
    a.href = URL.createObjectURL(new Blob([output], { type: "text/plain" }));
    a.download = fileName;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    //window.location.reload();
    return true;
  }
};

const createICS = (csv: Blob) => {
  let fileContent;
  let idList: string[] = [];
  let fileNameList: string[] = [];
  let tmpList;
  let output: string = "";

  // Create ICS file
  let reader = new FileReader();
  reader.readAsText(csv);
  reader.onload = () => {
    fileContent = String(reader.result);
    //Check if the uploaded file is from KdBAlt
    if (fileContent?.slice(0, 1) === "科") {
      tmpList = fileContent.split("\n").filter((x) => x.slice(0, 1) === '"');
      tmpList = tmpList
        .map((x) => x.replace('"', ""))
        .filter((x, i, self) => self.indexOf(x) === i);
      idList = tmpList;
      output += parseCSV(idList, kdb, true);
    } else {
      idList = fileContent
        .split("\n")
        .filter((x, i, self) => self.indexOf(x) === i);
      output += parseCSV(idList, kdb, true);
    }
  };
  interval = setInterval(function () {
    if (output !== "") {
      downloadCSV(output);
    }
  }, 100);
};

const onFileStateChanged = (event: React.ChangeEvent<HTMLInputElement>) => {
  let idList: string[] = [];
  if (event.currentTarget.files !== null) {
    const file = (event.currentTarget as HTMLInputElement).files![0];
    if (!file) {
      window.alert("ファイルが選択されていません");
      return;
    }

    if (!file.name.endsWith(".csv")) {
      window.alert("CSVファイルをアップロードしてください");
      return;
    } else {
      const idList = createICS(file);
    }
  }
};

function App() {
  return (
    <div className="App">
      <h1>TwinC</h1>
      <p>TWINSまたはKdBもどきのCSVファイルを選択してください</p>
      <p>詳しい使い方はHelpを参照してください</p>
      <div id="selectedFiles"></div>
      <label id="fileUpload">
        ファイル選択
        <input
          type="file"
          id="fileUpload"
          accept=".csv"
          onChange={onFileStateChanged}
        ></input>
      </label>
      <span className="notice">
        <span className="warn">
          <p>
            生成したICSファイルは新しく作ったカレンダーにインポートしてください！
          </p>
        </span>
        <p>試験期間、試験日の予定は登録されないことに注意してください</p>
        <p>モジュールの期間は学年暦に基づいています</p>
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
