import kdb from "./assets/kdb.json";
const parseIDList = (csv: Blob): string[] => {
  let fileContent;
  let idList: string[] = [];
  let fileNameList: string[] = [];
  let tmpList;

  // Create the ID list
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
      return idList;
    } else {
      idList = fileContent
        .split("\n")
        .filter((x, i, self) => self.indexOf(x) === i);
      return idList;
    }
  };
  return idList;
};

function sample(idList: string[]) {
  console.log(idList);
}

export const createICS = (csv: Blob) => {
  const idList: string[] = parseIDList(csv);
  sample(idList);
};

export default createICS;
