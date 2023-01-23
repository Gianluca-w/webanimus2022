import { useState } from "react"
import Image from 'next/image';
import Arrow from '../public/assets/icons/arrowBlack.svg'
import { SendMail, SanitizeGeneral } from './GeneralistFunctions'
import NorificationCard from "./NotificationCard";


const ContactFormHireTheCoop = ({ }) => {
    const [name, setName] = useState("");
    const [mail, setMail] = useState("");
    const [phone, setPhone] = useState("");
    const [message, setMessage] = useState("");
    function IncompleteField(Field){
        switch (Field) {
            case "Name":
                return <NorificationCard Title={`Incomplete ${Field}`} Body={`Please COmplete the ${Field} before trying again`}/>
            case "Mail":
                break;
            case "Phone":
                break;
            case "Message":
                break;
            case "Resume":
                break;
            default:
                break;
        }
    }
    function CheckHireFormCompletion(){
       let CheckName = name
       let CheckMail = mail
       let CheckPhone = phone
       let CheckMsg = message
       if(CheckName.replace(/_/g, "") ==""){
        return IncompleteField("Name")
       }
       if(CheckMail.replace(/_/g, "") ==""){
        return IncompleteField("Mail")
       }
       if(CheckPhone.replace(/_/g, "") ==""){
        return IncompleteField("Phone")
       }
       if(CheckMsg.replace(/_/g, "") ==""){
        return IncompleteField("Message")
       }

    
        return SendMail('hire',name,mail,phone,message)
    }
    return <form action="/api/mailing" method="post">
    <div className={`ContactFormWrapper`}>

        <div className='ContactFormUnderlining'>
            <div className='ContactFormInputWrapper'>
                <div className='ContactFormWideInput'>
                    <p className="PlaceholderAligner">Name</p>
                    <input type="text" placeholder='Name' onChange={(event) => setName(SanitizeGeneral(event.target, 30))}></input>
                </div>
                <div className='ContactFormWideInput'>
                    <p className="PlaceholderAligner">Email</p>
                    <input type="text" placeholder='Email' onChange={(event) => setMail(SanitizeGeneral(event.target,35))}></input>
                </div>
                <div className='ContactFormPhoneInput'>
                    <p className="PlaceholderAligner">Phone</p>
                    <input type="text" placeholder='Phone' autoComplete="off" onChange={(event) => setPhone(SanitizeGeneral(event.target,15,/[^0-9+]/g))}></input>
                </div>
            </div>
        </div>
        <div className='ContactFormUnderlining'>
            <div className='ContactFormInputWrapper'>
                <div className='ContactFormWideInput TextareaWrapper'>
                    <p>Message</p>
                    <textarea type='text' placeholder='Your message' className='' onChange={(event)=>setMessage(SanitizeGeneral(event.target))}>
                    </textarea>
                </div>
            </div>
        </div>
        <NorificationCard Title={`Incomplete field `} Body={`Please COmplete the field before trying again`}/>
            
        <div className="ContactFormSendWrapper" >
                <button className='ContactFormSend' type='button' onClick={(e)=>CheckHireFormCompletion()}><div className=''>Send</div>
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