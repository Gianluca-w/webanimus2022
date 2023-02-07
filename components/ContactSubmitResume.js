import { useState, useReducer, useRef } from "react";

import ArrowIcon from "./icons/ArrowIcon";

import { SendMail } from "./GeneralistFunctions";

import DropzoneFilePreview from "./DropzoneFilePreview";

const ContactFormDragNDrop = ({ resume, setResume, title }) => {
  const inputSubmitElement = useRef();

  const handleDrop = async (e) => {
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
    const body = new FormData();
    body.append("file", e.dataTransfer.files[0]);
    const response = await fetch("/api/FileUploader", {
      method: "POST",
      body,
    });
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
    inputSubmitElement.current.click();
  };

  return (
    <div>
      <div
        onDrop={(e) => handleDrop(e)}
        onDragOver={(e) => handleDragOver(e)}
        className="DragAndDropArea HowToCenterMiddle"
      >
        <label htmlFor={"resumeUploader"} className="resumeUploaderLabel ">
          <div className="HowToCenterMiddle">
            <button
              type="button"
              className="uploadResumeButton"
              onClick={(e) => handleInputClick(e)}
            >
              {title}
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

const ContactSubmitResume = ({ content }) => {
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
      email: "",
      phone: "",
      message: "",
    }
  );
  const [resume, setResume] = useReducer(reducer, {
    inDropZone: false,
    fileList: [],
  });
  const HandleFieldChange = (e) => {
    setField(
      {
        ...field,
        [e.target.name]: e.target.value
      }
    )
  }
  const CheckHireFormCompletion = (e) => {
    e.preventDefault();
    e.stopPropagation();
    SendMail("resume", field.name, field.email, field.phone, field.message, resume.fileList.slice(-1)[0].name)
  }

  return (
    <form
      action="/api/mailing"
      method="post"
      onSubmit={(e) =>
        CheckHireFormCompletion(e)
      }>
      <div className="ContactFormWrapper">
        <div className="ContactFormWideInput ContactFormUnderlining">
          <p className="PlaceholderAligner">{content.inputName}</p>
          <input
            type="text"
            name="name"
            maxLength={30}
            placeholder={content.placeholderName}
            required
            onChange={(e) => HandleFieldChange(e)}
          ></input>
        </div>
        <div className="ContactFormWideInput ContactFormUnderlining">
          <p className="PlaceholderAligner">{content.inputMail}</p>
          <input
            type="email"
            name="email"
            placeholder={content.placeholderMail}
            maxLength={35}
            required
            onChange={(e) => HandleFieldChange(e)}
          ></input>
        </div>
        <div className="ContactFormWideInput ContactFormUnderlining">
          <p className="PlaceholderAligner">{content.inputPhone}</p>
          <input
            type="tel"
            autoComplete="off"
            name="phone"
            placeholder={content.placeholderPhone}
            maxLength={15}
            required
            onChange={
              (e) => HandleFieldChange(e)
            }
          ></input>
        </div>
        <div className="ContactFormWideInput">
          <div className="ContactFormUnderlining">
            <p>{content.inputMessage}</p>
            <textarea
              type="text"
              name="message"
              required
              className=""
              placeholder={content.placeholderMessage}
              onChange={(e) => HandleFieldChange(e)}
            ></textarea>
          </div>
        </div>
        <div className="ContactFormWideInput">
          <div className="marginBot10">
            <p>{content.inputResume}</p>
          </div>
          <div className="DragAndDropWrapper">
            {" "}
            <ContactFormDragNDrop resume={resume} setResume={setResume} title={content.inputContent} />
          </div>
        </div>
        <div className="ContactFormSendWrapper">
          <button
            className="ContactFormSend"
            type="submit"
          >
            <div className="">{content.inputSend}</div>
            <div className="ContactFormSendLineContent">
              <ArrowIcon
                fill="1px"
                stroke="black"
                size="100%" />
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
