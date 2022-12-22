import React from "react";
//import styles from "../styles/FilePreview.module.css";

const DropzoneFilePreview = ({ fileData }) => {
  return (
    <div >
      <div >
        {/* loop over the fileData */}
        {fileData.fileList.map((f) => {
          return (
              <ol key={f.lastModified}>
                <li>
                  {/* display the filename and type */}
                  <div key={f.name}>
                    {f.name}
                  </div>
                </li>
              </ol>
          );
        })}
      </div>
    </div>
  );
};

export default DropzoneFilePreview;