import { useState } from "react"
import Image from 'next/image';
import Arrow from '../public/assets/icons/arrowBlack.svg'
import { SendMail, SanitizeGeneral } from './GeneralistFunctions'

const ContactFormHireTheCoop = ({ }) => {
    const [name, setName] = useState("");
    const [mail, setMail] = useState("");
    const [phone, setPhone] = useState("");
    const [message, setMessage] = useState("");


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