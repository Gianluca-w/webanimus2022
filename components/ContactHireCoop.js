import { useState } from "react"
import Image from 'next/image';
import Arrow from '../public/assets/icons/arrowBlack.svg'
import {SendMail} from './ContactForm.js'

const ContactFormHireTheCoop = ({ }) => {
    const [name, setName] = useState("");
    const [mail, setMail] = useState("");
    const [phone, setPhone] = useState("");
    const [message, setMessage] = useState("");
    function SanitizeGeneral(ToSanitize,ReturnTo,MaxLength=580,Desinfectant=/[/[\]{}"'$]/g){
        ToSanitize.value=ToSanitize.value.slice(0,MaxLength)
        const SanitizedValue = ToSanitize.value.replaceAll(Desinfectant,"")
        if (ReturnTo=="Name") {setName(SanitizedValue);}
        if (ReturnTo=="Mail") {setMail(SanitizedValue);}
        if (ReturnTo=="Phone") {ToSanitize.value=SanitizedValue; setPhone(SanitizedValue);}
        if (ReturnTo=="Message") {setMessage(SanitizedValue);}
    }

    return <form action="/api/mailing" method="post">
    <div className={`ContactFormWrapper`}>

        <div className='ContactFormUnderlining'>
            <div className='ContactFormInputWrapper'>
                <div className='ContactFormWideInput'>
                    <p className="PlaceholderAligner">Name</p>
                    <input type="text" placeholder='Name' onChange={(event) => SanitizeGeneral(event.target,"Name",30)}></input>
                </div>
                <div className='ContactFormWideInput'>
                    <p className="PlaceholderAligner">Email</p>
                    <input type="text" placeholder='Email' onChange={(event) => SanitizeGeneral(event.target, "Mail",35)}></input>
                </div>
                <div className='ContactFormPhoneInput'>
                    <p className="PlaceholderAligner">Phone</p>
                    <input type="text" placeholder='Phone' onChange={(event) => SanitizeGeneral(event.target, "Phone",15,/[^0-9+]/g)}></input>
                </div>
            </div>
        </div>
        <div className='ContactFormUnderlining'>
            <div className='ContactFormInputWrapper'>
                <div className='ContactFormWideInput TextareaWrapper'>
                    <p>Message</p>
                    <textarea type='text' placeholder='Your message' className='' onChange={(event)=>SanitizeGeneral(event.target,"Message")}>
                    </textarea>
                </div>
            </div>
        </div>
            
        <div className="ContactFormSendWrapper" >
                <button className='ContactFormSend' type='button' onClick={(e)=>SendMail('hire',name,mail,phone,message)}><div className=''>Send</div>
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