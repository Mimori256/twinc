const downloadCSV = (output: string, debugMode: boolean) => {
  const now = new Date();
  const fileName = `${now.getHours().toString().padStart(2, "0")}-${now
    .getMinutes()
    .toString()
    .padStart(2, "0")}-${now
    .getSeconds()
    .toString()
    .padStart(2, "0")}twinc.ics`;

  if (window.navigator.msSaveBlob) {
    window.navigator.msSaveBlob(
      new Blob([output], { type: "text/plain" }),
      fileName,
    );
    if (!debugMode) {
      window.location.reload();
    }
  } else {
    const a = document.createElement("a");
    a.href = URL.createObjectURL(new Blob([output], { type: "text/plain" }));
    a.download = fileName;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    if (!debugMode) {
      window.location.reload();
    }
    return true;
  }
};

export default downloadCSV;
