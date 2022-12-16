import React, { useState } from 'react';
import Image from 'next/image';
import Arrow from '../public/assets/icons/arrowBlack.svg'
import ContactFormHireTheCoop from './ContactHireCoop';
import ContactSubmitResume from './ContactSubmitResume';


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

                <ContactSubmitResume />

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


export default ContactForm