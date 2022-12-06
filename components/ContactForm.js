import React, { useState } from 'react';
import Image from 'next/image';
import Arrow from '../public/assets/icons/arrowBlack.svg'


const ContactForm = ({ }) => {
    return <div className={`FormWrapper`}>
        <ContactFormButtons />
        <ContactFormForm />
    </div>
}
const ContactFormButtons = ({ }) => {

    return <div>

    </div>
}
const ContactFormForm = ({ }) => {
    const [visible, Visibility] = useState(false);
    const HandleClickToFalsify = event => {
        Visibility(false);
    };
    const HandleClickToVerify = event => {
        Visibility(true);
    };
    return <div className='ContactFormMain'>
        <button className={visible ? 'NotUnderlinedButton ContactFormSelector' : 'UnderlinedButton ContactFormSelector'} onClick={HandleClickToFalsify}>Want To Hire the Coop?</button>
        <button className={visible ? 'UnderlinedButton ContactFormSelector' : 'NotUnderlinedButton ContactFormSelector'} onClick={HandleClickToVerify}>Be part of ANIMUS</button>
        <form action="/api/mailing" method="post">
            <div className={visible ? 'NotVisible' : 'Visible'}>

                <ContactFormHireTheCoop />

            </div>
            <div className={visible ? 'Visible' : 'NotVisible'}>

                <ContactFormHiring />

            </div>
            <div className="ContactFormSendWrapper" >
                <button className='ContactFormSend' type='submit'><div className=''>Send</div>
                    <div className='ContactFormSendLineContent'>
                        <Image src={Arrow.src}
                            width={'1px'}
                            height={'1px'}
                            layout='responsive'
                            alt='>' />
                    </div>
                </button></div>
        </form>
    </div>
}
const ContactFormHireTheCoop = ({ }) => {
    return <div className={`ContactFormWrapper`}>

        <div className='ContactFormUnderlining'>

            <div className='ContactFormInputWrapper'>
                <div className='ContactFormWideInput'>
                    <p>Name</p>
                    <input type="text" placeholder='Name' name='name'></input>
                </div>
                <div className='ContactFormWideInput'>
                    <p>Email</p>
                    <input type="mail" placeholder='Email' name='mail'></input>
                </div>
                <div className='ContactFormPhoneInput'>
                    <p>Phone</p>
                    <input type="number" placeholder='Phone' name='phone'></input>
                </div>
            </div>
        </div>
        <div className='ContactFormUnderlining'>
            <div className='ContactFormInputWrapper'>
                <div className='ContactFormWideInput'>
                    <p>Message</p>
                    <textarea type='text' placeholder='Your message' name='message' className=''>

                    </textarea>
                </div>
            </div>
        </div>
    </div>
}
const ContactFormHiring = ({ }) => {
    return <div className={`ContactFormWrapper`}>
        <div className='ContactFormUnderlining'>
            <div className='ContactFormInputWrapper'>
                <div className='ContactFormWideInput'>
                    <p>Name</p>
                    <input type="text" placeholder='Name'></input>
                </div>
                <div className='ContactFormWideInput'>
                    <p>Email</p>
                    <input type="mail" placeholder='Email'></input>
                </div>
                <div className='ContactFormPhoneInput'>
                    <p>Phone</p>
                    <input type="number" placeholder='Phone'></input>
                </div>
            </div>
        </div>

        <div>
            <div className='ContactFormInputWrapper'>
                <div className='ContactFormWideInput'>
                    <p>Message</p>
                </div>
                <div className='ContactFormRestricted40Input'>
                    <p>Resume</p>
                </div>

            </div>
        </div>

        <div className='ContactFormInputWrapper'>
            <div className='ContactFormUnderlining'>
                <div className='ContactFormWideInput'>
                    <textarea type='text' placeholder='Message' className=''>
                    </textarea>
                </div>
            </div>
            <div className='ContactFormRestricted40Input'>
                <div className='DragAndDropBorder'>
                    DRAG AND DROP HERE
                </div>

            </div>


        </div>


    </div>
}
export default ContactForm