import { useState, useReducer } from "react"
import Image from 'next/image';
import Arrow from '../public/assets/icons/arrowBlack.svg'
import { SendMail, SanitizeGeneral } from './GeneralistFunctions'

const ContactFormDragNDrop = ({ resume, setResume }) => {
    const handleDrop = (e) => {
        e.preventDefault();
        e.stopPropagation();

        let files = [...e.dataTransfer.files];
        console.log(files)
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

    }
    const handleDragOver = (e) => {
        e.preventDefault();
        e.stopPropagation();

        e.dataTransfer.dropEffect = "copy";
        setResume({ type: "SET_IN_DROP_ZONE", inDropZone: true });
    }
    const uploadToServer = async (event) => {
        const body = new FormData();
        body.append("file", event.target.files[0]);
        const response = await fetch("/api/FileUploader", {
            method: "POST",
            body
        });
    }


    return <div>
        <div
            onDrop={(e) => handleDrop(e)}
            onDragOver={(e) => handleDragOver(e)}
            className="DragAndDropArea"
        >
            <input type="file" name="ResumeUploader" onChange={uploadToServer} />
        </div>
    </div>

};

const ContactSubmitResume = ({ }) => {
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

    const [name, setName] = useState("");
    const [mail, setMail] = useState("");
    const [phone, setPhone] = useState("");
    const [message, setMessage] = useState("");
    const [resume, setResume] = useReducer(reducer, {
        inDropZone: false,
        fileList: [],
    });
  

    return <form action="/api/mailing" method="post">
        <div className={`ContactFormWrapper`}>
            <div className='ContactFormUnderlining'>
                <div className='ContactFormInputWrapper'>
                    <div className='ContactFormWideInput'>
                        <p className="PlaceholderAligner">Name</p>
                        <input type="text" placeholder='Name' name="name" onChange={(event) => setName(SanitizeGeneral(event.target, 30))}></input>
                    </div>
                    <div className='ContactFormWideInput'>
                        <p className="PlaceholderAligner">Email</p>
                        <input type="mail" placeholder='Email' name="mail" onChange={(event) => setMail(SanitizeGeneral(event.target, 35))}></input>
                    </div>
                    <div className='ContactFormPhoneInput'>
                        <p className="PlaceholderAligner">Phone</p>
                        <input type="text" placeholder='Phone' autoComplete="off" name="phone" onChange={(event) => setPhone(SanitizeGeneral(event.target, 15, /[^0-9+]/g))}></input>
                    </div>
                </div>
            </div>

            <div className='ContactFormInputWrapper'>
                <div className='ContactFormWideInput'>
                    <div className="ContactFormUnderlining">
                        <p>Message</p>
                        <textarea type='text' placeholder='Your message' name='message' className='' onChange={(event) => setMessage(SanitizeGeneral(event.target))}>

                        </textarea>
                    </div>
                </div>
                <div className='ContactFormWideInput'>

                    <div><p style={{ paddingLeft: "10px" }}>Resume</p></div>
                    <div className="DragAndDropWrapper"><div className="DragAndDropArea"> <ContactFormDragNDrop resume={resume} setResume={setResume} /> </div></div>

                </div>

            </div>
            <div className="ContactFormSendWrapper" >
                <button className='ContactFormSend' type='button' onClick={(e) => SendMail('resume', name, mail, phone, message, resume)}><div className=''>Send</div>
                    <div className='ContactFormSendLineContent'>
                        <Image src={Arrow.src}
                            width={'1px'}
                            height={'1px'}
                            layout='responsive'
                            alt='>' />
                    </div>
                </button>
            </div>

        </div>
        <input name="type" value='resume' className="InputFlagger" readOnly></input>
    </form>
}
export default ContactSubmitResume