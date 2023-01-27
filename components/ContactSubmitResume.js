import { useState, useReducer, useRef } from "react";
import Image from "next/image";
import Arrow from "../public/assets/icons/arrowBlack.svg";
import uploadSvg from "../public/assets/icons/uploadFileIcon.svg";
import { SendMail, SanitizeGeneral } from "./GeneralistFunctions";

import DropzoneFilePreview from "./DropzoneFilePreview";

const ContactFormDragNDrop = ({ resume, setResume }) => {
  const inputSubmitElement = useRef();

  const handleDrop = (e) => {
    e.preventDefault();
    e.stopPropagation();

    let files = [...e.dataTransfer.files];
    console.log(files);
    if (files && files.length > 0) {
      // loop over existing files
      const existingFiles = resume.fileList.map((f) => f.name);
      // check if file already exists, if so, don't add to fileList
      // this is to prevent duplicates
      files = files.filter((f) => !existingFiles.includes(f.name));

      // dispatch action to add droped file or files to fileList
      setResume({ type: "ADD_FILE_TO_LIST", files });
      // reset inDropZone to false
      setResume({ type: "SET_IN_DROP_ZONE", inDropZone: false });
    }
  };
  const handleDragOver = (e) => {
    e.preventDefault();
    e.stopPropagation();

    e.dataTransfer.dropEffect = "copy";
    setResume({ type: "SET_IN_DROP_ZONE", inDropZone: true });
  };
  const uploadToServer = async (event) => {
    let files = [...event.target.files];
    console.log(files);
    if (files && files.length > 0) {
      // loop over existing files
      const existingFiles = resume.fileList.map((f) => f.name);
      // check if file already exists, if so, don't add to fileList
      // this is to prevent duplicates
      files = files.filter((f) => !existingFiles.includes(f.name));

      // dispatch action to add droped file or files to fileList
      setResume({ type: "ADD_FILE_TO_LIST", files });
      // reset inDropZone to false
      setResume({ type: "SET_IN_DROP_ZONE", inDropZone: false });
    }
    const body = new FormData();
    body.append("file", event.target.files[0]);
    const response = await fetch("/api/FileUploader", {
      method: "POST",
      body,
    });
  };
  const handleInputClick = (e) => {
    e.preventDefault();
    e.stopPropagation();
    console.log("Working");
    inputSubmitElement.current.click();
  };

  return (
    <div>
      <div
        onDrop={(e) => handleDrop(e)}
        onDragOver={(e) => handleDragOver(e)}
        className="DragAndDropArea HowToCenterMiddle"
      >
        <label for={"resumeUploader"} className="resumeUploaderLabel ">
          <div className={`HowToCenterMiddle ${(!resume.fileList[0])? 'visible':'notVisible'}`}>
            <div className="svgUploadWrapper filterWhite ">
              <Image
                src={uploadSvg.src}
                layout="responsive"
                alt=""
                height="1px"
                width="1px"
              />
            </div>
          </div>
          <div className="HowToCenterMiddle">
            <p className="RegP">Drag And Drop Here or</p>
          </div>
          <div className="HowToCenterMiddle">
            <button
              type="button"
              className="uploadResumeButton"
              onClick={(e) => handleInputClick(e)}
            >
              Upload a File
            </button>
          </div>

          <input
            type="file"
            id="resumeUploader"
            name="resumeUploader"
            className="NotVisible"
            onChange={uploadToServer}
            ref={inputSubmitElement}
          />
          <DropzoneFilePreview fileData={resume} />
        </label>
      </div>
    </div>
  );
};

const ContactSubmitResume = ({}) => {
  // reducer function to handle state changes
  const reducer = (state, action) => {
    switch (action.type) {
      case "SET_IN_DROP_ZONE":
        return { ...state, inDropZone: action.inDropZone };
      case "ADD_FILE_TO_LIST":
        return { ...state, fileList: state.fileList.concat(action.files) };
      default:
        return state;
    }
  };

  const [field, setField] = useState(
    {
        name: "",
        mail: "",
        phone: "",
        message: "",
    }
);
const [errorField, setErrorField] = useState(
    {
        name: false,
        mail: false,
        phone: false,
        message: false,
    }
);
  const [resume, setResume] = useReducer(reducer, {
    inDropZone: false,
    fileList: [],
  });
  const HandleFieldChange = (e, maxLength, RegEx = "") => {
    setField(
        {
            ...field,
            [e.target.name]: SanitizeGeneral(e.target, maxLength, RegEx)
        }
    )
}
  const CheckHireFormCompletion = (e) => {
    e.preventDefault();
    e.stopPropagation();
    for (const [key, value] of Object.entries(field)) {
        (value != '') ? setErrorField(errorField => ({ ...errorField, [key]: false })) : setErrorField(errorField => ({ ...errorField, [key]: true }))
    }
    if(field.name==''){
        return console.log("Didnt Send. Was lacking name")
    }
    if(field.mail==''){
        return console.log("Didnt Send. Was lacking mail")
    }
    if(field.phone==''){
        return console.log("Didnt Send. Was lacking phone")
    }
    if(field.message==''){
        return console.log("Didnt Send. Was lacking message")
    }
    SendMail("resume", field.name, field.mail, field.phone, field.message, resume)
}

  return (
    <form action="/api/mailing" method="post">
      <div className={`ContactFormWrapper`}>
        <div className="">
          <div className="">
            <div className={`ContactFormWideInput ContactFormUnderlining ${!errorField.name ? '' : 'ContactFormRedUnderlining'}`}>
              <p className="PlaceholderAligner">Name</p>
              <input
                type="text"
                placeholder="Name"
                name="name"
                onChange={(e) => HandleFieldChange(e, 30)}
              ></input>
            </div>
            <div className={`ContactFormWideInput ContactFormUnderlining ${!errorField.mail ? '' : 'ContactFormRedUnderlining'}`}>
              <p className="PlaceholderAligner">Email</p>
              <input
                type="mail"
                placeholder="Email"
                name="mail"
                onChange={(e) => HandleFieldChange(e, 35)}
              ></input>
            </div>
            <div className={`ContactFormWideInput ContactFormUnderlining ${!errorField.phone ? '' : 'ContactFormRedUnderlining'}`}>
              <p className="PlaceholderAligner">Phone</p>
              <input
                type="text"
                placeholder="Phone"
                autoComplete="off"
                name="phone"
                onChange={
                    (e) => HandleFieldChange(e, 15, /[^0-9+]/g)
                }
              ></input>
            </div>
          </div>
        </div>

        <div className="">
          <div className="ContactFormWideInput">
            <div className={`ContactFormUnderlining ${!errorField.phone ? '' : 'ContactFormRedUnderlining'}`}>
              <p>Message</p>
              <textarea
                type="text"
                placeholder="Your message"
                name="message"
                className=""
                onChange={(e) => HandleFieldChange(e)}
              ></textarea>
            </div>
          </div>
          <div className="ContactFormWideInput">
            <div>
              <p>Resume</p>
            </div>
            <div className="DragAndDropWrapper">
              {" "}
              <ContactFormDragNDrop resume={resume} setResume={setResume} />
            </div>
          </div>
        </div>
        <div className="ContactFormSendWrapper">
          <button
            className="ContactFormSend"
            type="button"
            onClick={(e) =>
                CheckHireFormCompletion(e)
            }
          >
            <div className="">Send</div>
            <div className="ContactFormSendLineContent">
              <Image
                src={Arrow.src}
                width={"1px"}
                height={"1px"}
                layout="responsive"
                alt=">"
              />
            </div>
          </button>
        </div>
      </div>
      <input
        name="type"
        value="resume"
        className="InputFlagger"
        readOnly
      ></input>
    </form>
  );
};
export default ContactSubmitResume;
