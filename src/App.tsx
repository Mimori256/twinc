import React from "react";
import "./App.css";
import Help from "./Help";
//import { parse } from "node:path/win32";
import kdb from "./assets/kdb.json";
import parseCSV from "./parse";

const createICS = (csv: Blob) => {
  let fileContent;
  let idList: string[] = [];
  let fileNameList: string[] = [];
  let tmpList;
  let output: string;

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
      console.log(idList);
      output = parseCSV(idList, kdb, true);
    } else {
      idList = fileContent
        .split("\n")
        .filter((x, i, self) => self.indexOf(x) === i);
      output = parseCSV(idList, kdb, true);
    }
  };
  output = parseCSV(idList, kdb, true);
  output += "END:VCALENDAR";

  const now = new Date();
  const hour = ("0" + now.getHours()).slice(-2);
  const minute = ("0" + now.getMinutes()).slice(-2);
  const second = ("0" + now.getSeconds()).slice(-2);
  const fileName = `${hour}-${minute}-${second}${"twinc.ics"}`;
};

const onFileStateChanged = (event: React.ChangeEvent<HTMLInputElement>) => {
  let idList: string[] = [];
  if (event.currentTarget.files !== null) {
    const file = (event.currentTarget as HTMLInputElement).files![0];
    console.log(file);
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
      <input
        type="file"
        id="fileUpload"
        accept=".csv"
        onChange={onFileStateChanged}
      ></input>
    </div>
  );
}

export default App;
