const fs = require("node:fs");

const getCurrentDate = () => {
  const date = new Date();
  const year = date.getFullYear();
  const month = (date.getMonth() + 1).toString().padStart(2, "0");
  const day = date.getDate().toString().padStart(2, "0");
  return { updateDate: `${year}-${month}-${day}` };
};

const main = () => {
  console.log("Start updating date...");
  // Check if the script is run in the project root directory
  if (!process.cwd().endsWith("twinc")) {
    console.log("Please run the script in the project root directory");
    return;
  }

  const data = getCurrentDate();
  const dataStr = JSON.stringify(data, null, 2);
  fs.writeFileSync("src/components/updateDate.json", dataStr);
  console.log("Update date successfully");
};

main();
