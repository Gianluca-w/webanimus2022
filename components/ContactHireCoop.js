import { useState } from "react"
import Image from 'next/image';
import Arrow from '../public/assets/icons/arrowBlack.svg'
import { SendMail } from './GeneralistFunctions'


const ContactFormHireTheCoop = ({ }) => {
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
        console.log(field.email)
        SendMail("hire", field.name, field.email, field.phone, field.message)
    }
    return <form onSubmit={CheckHireFormCompletion}>
        <div className={`ContactFormWrapper`}>

            <div className=''>
                <div className={`ContactFormWideInput ContactFormUnderlining`}>
                    <p className="PlaceholderAligner">Name</p>
                    <input
                        type="text"
                        placeholder='Name'
                        name="name"
                        required
                        maxLength={30}
                        onChange={(e) => HandleFieldChange(e)}>
                    </input>
                </div>
                <div className={`ContactFormWideInput ContactFormUnderlining`}>
                    <p className="PlaceholderAligner">Email</p>
                    <input
                        type="email"
                        placeholder='Email'
                        name="email"
                        required
                        maxLength={30}
                        onChange={(e) => HandleFieldChange(e)}>
                    </input>
                </div>
                <div className={`ContactFormWideInput ContactFormUnderlining `}>
                    <p className="PlaceholderAligner">Phone</p>
                    <input
                        type="tel"
                        placeholder='Phone'
                        maxLength={15}
                        required
                        name="phone"
                        autoComplete="off"
                        onChange={(e) => HandleFieldChange(e)}>
                    </input>
                </div>
            </div>

            <div className={`ContactFormUnderlining `}>
                <div className=''>
                    <div className='ContactFormWideInput TextareaWrapper'>
                        <p>Message</p>
                        <textarea
                            type='text'
                            placeholder='Your message'
                            required
                            name="message"
                            onChange={(e) => HandleFieldChange(e)}>
                        </textarea>
                    </div>
                </div>
            </div>

            <div className="ContactFormSendWrapper" >
                <button className='ContactFormSend' type='submit'><div>Send</div>
                    <div className='ContactFormSendLineContent'>
                        <Image 
                            src={Arrow.src}
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