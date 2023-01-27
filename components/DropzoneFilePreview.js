import React from "react";
//import styles from "../styles/FilePreview.module.css";

const DropzoneFilePreview = ({ fileData }) => {
  return (
    <div className="dropzonePreviewWrapper">
      <div >
        {/* loop over the fileData */}
        {fileData.fileList.map((f) => {
          return (
              <ul className="noMargin noPadding" key={`${f.lastModified}${f.name}`}>
                <li>
                  {/* display the filename and type */}
                  <div key={f.name}>
                    {f.name}
                  </div>
                </li>
              </ul>
          );
        })}
      </div>
    </div>
  );
};

export default DropzoneFilePreview;