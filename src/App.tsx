import React, { useState, useEffect, useCallback } from "react";
import createIcs from "twinc-core-ics-creator";
import FileSelector from "./components/FileSelector";
import Footer from "./components/Footer";
import Help from "./components/Help";
import { SmallHelp } from "./components/SmallHelp";
import downloadCSV from "./components/downloadCSV";
import { coreStyle } from "./components/styles";

declare global {
  interface Navigator {
    msSaveBlob?: (blob: any, defaultName?: string) => boolean;
  }
}

function App() {
  const [noDeadlines, setNoDeadlines] = useState(false);
  const [fileContent, setFileContent] = useState("");
  const debugMode = false;

  const processFileContent = useCallback(async () => {
    if (fileContent) {
      const ICSFile = await createIcs(fileContent, !noDeadlines);
      if (ICSFile) downloadCSV(ICSFile, debugMode);
    }
  }, [fileContent, noDeadlines]);

  useEffect(() => {
    processFileContent();
  }, [processFileContent]);

  const onCheckboxChanged = (e: React.ChangeEvent<HTMLInputElement>) => {
    setNoDeadlines(e.target.checked);
  };

  const readFile = (file: File): Promise<string> => {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.readAsText(file);
      reader.onload = () => resolve(String(reader.result));
      reader.onerror = reject;
    });
  };

  const onFileSelected = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = (e.currentTarget as HTMLInputElement).files?.[0];
    if (!file) {
      window.alert("ファイルが選択されていません");
      return;
    }

    if (!file.name.endsWith(".csv")) {
      window.alert("CSVファイルをアップロードしてください");
      return;
    }

    try {
      const fileContent = await readFile(file);
      setFileContent(fileContent);
    } catch (err) {
      console.error("Failed to read file", err);
    }
  };

  return (
    <div className={coreStyle}>
      <h1>TwinC</h1>
      <p>TWINSまたはKdBもどきのCSVファイルを選択してください</p>
      <h4>詳しい使い方は下にスクロールして、Helpを参照してください</h4>
      <FileSelector onFileChange={onFileSelected} />
      <input
        id="includeDeadlines"
        type="checkbox"
        name="includeDeadlines"
        checked={noDeadlines}
        onChange={onCheckboxChanged}
      />
      <label htmlFor="includeDeadlines">
        事前登録・履修登録締切日を追加しない
      </label>
      <SmallHelp />
      <Help />
      <Footer />
    </div>
  );
}

export default App;
