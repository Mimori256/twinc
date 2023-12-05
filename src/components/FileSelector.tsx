import React from "react";
import { fileSelectorStyle } from "./styles";

interface FileSelectorProps {
  onFileChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const FileSelector: React.FC<FileSelectorProps> = ({ onFileChange }) => (
  <div className={fileSelectorStyle}>
    <label id="fileUpload">
      ファイル選択
      <input
        type="file"
        id="fileUpload"
        accept=".csv"
        onChange={onFileChange}
      />
    </label>
  </div>
);

export default FileSelector;
