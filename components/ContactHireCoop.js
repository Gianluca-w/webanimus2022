import { useState } from "react"
import Image from 'next/image';
import Arrow from '../public/assets/icons/arrowBlack.svg'
import { SendMail, SanitizeGeneral } from './GeneralistFunctions'


const ContactFormHireTheCoop = ({ }) => {
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
        SendMail("hire", field.name, field.mail, field.phone, field.message)
    }
    return <form>
        <div className={`ContactFormWrapper`}>

            <div className=''>
                <div className={`ContactFormWideInput ContactFormUnderlining ${!errorField.name ? '' : 'ContactFormRedUnderlining'}`}>
                    <p className="PlaceholderAligner">Name</p>
                    <input type="text" placeholder='Name' name="name" onChange={(e) => HandleFieldChange(e, 30)}></input>
                </div>
                <div className={`ContactFormWideInput ContactFormUnderlining ${!errorField.mail ? '' : 'ContactFormRedUnderlining'}`}>
                    <p className="PlaceholderAligner">Email</p>
                    <input type="text" placeholder='Email' name="mail" onChange={(e) => HandleFieldChange(e, 35)}></input>
                </div>
                <div className={`ContactFormWideInput ContactFormUnderlining ${!errorField.phone ? '' : 'ContactFormRedUnderlining'}`}>
                    <p className="PlaceholderAligner">Phone</p>
                    <input type="text" placeholder='Phone' name="phone" autoComplete="off" onChange={(e) => HandleFieldChange(e, 15, /[^0-9+]/g)}></input>
                </div>
            </div>

            <div className={`ContactFormUnderlining ${!errorField.message ? '' : 'ContactFormRedUnderlining'}`}>
                <div className=''>
                    <div className='ContactFormWideInput TextareaWrapper'>
                        <p>Message</p>
                        <textarea type='text' placeholder='Your message' name="message" className='' onChange={(e) => HandleFieldChange(e)}>
                        </textarea>
                    </div>
                </div>
            </div>

            <div className="ContactFormSendWrapper" >
                <button className='ContactFormSend' type='submit' onClick={(e) => CheckHireFormCompletion(e)}><div className=''>Send</div>
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
    </form>
}
export default ContactFormHireTheCoop