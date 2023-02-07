import { useState } from "react"

import ArrowIcon from "./icons/ArrowIcon";

import { SendMail } from './GeneralistFunctions'


const ContactFormHireTheCoop = ({ content }) => {
    const [field, setField] = useState(
        {
            name: "",
            email: "",
            phone: "",
            message: "",
        }
    );
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
        SendMail("hire", field.name, field.email, field.phone, field.message)
    }
    return <form
        onSubmit={CheckHireFormCompletion}>
        <div className={`ContactFormWrapper`}>

            <div className=''>
                <div className={`ContactFormWideInput ContactFormUnderlining`}>
                    <p className="PlaceholderAligner">{content.inputName}</p>
                    <input
                        type="text"
                        name="name"
                        required
                        placeholder={content.placeholderName}
                        maxLength={30}
                        onChange={(e) => HandleFieldChange(e)}>
                    </input>
                </div>
                <div className={`ContactFormWideInput ContactFormUnderlining`}>
                    <p className="PlaceholderAligner">{content.inputMail}</p>
                    <input
                        type="email"
                        name="email"
                        placeholder={content.placeholderMail}
                        required
                        maxLength={30}
                        onChange={(e) => HandleFieldChange(e)}>
                    </input>
                </div>
                <div className={`ContactFormWideInput ContactFormUnderlining `}>
                    <p className="PlaceholderAligner">{content.inputPhone}</p>
                    <input
                        type="tel"
                        maxLength={15}
                        required
                        placeholder={content.placeholderPhone}
                        name="phone"
                        autoComplete="off"
                        onChange={(e) => HandleFieldChange(e)}>
                    </input>
                </div>
            </div>

            <div className={`ContactFormUnderlining `}>
                <div className=''>
                    <div className='ContactFormWideInput TextareaWrapper'>
                        <p>{content.inputMessage}</p>
                        <textarea
                            type='text'
                            required
                            placeholder={content.placeholderMessage}
                            name="message"
                            onChange={(e) => HandleFieldChange(e)}>
                        </textarea>
                    </div>
                </div>
            </div>

            <div className="ContactFormSendWrapper" >
                <button className='ContactFormSend' type='submit'><div>{content.inputSend}</div>
                    <div className='ContactFormSendLineContent'>
                        <ArrowIcon
                            fill="1px"
                            stroke="black"
                            size="100%" />
                    </div>
                </button>
            </div>
        </div>
    </form>
}
export default ContactFormHireTheCoop