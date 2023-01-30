import React, { useState } from 'react';
import ContactFormHireTheCoop from './ContactHireCoop';
import ContactSubmitResume from './ContactSubmitResume';

const ContactForm = ({ }) => {
    return <div className={`FormWrapper`}>
        <ContactFormForm />
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
        <div className='ContactFormInputWrapper'>
            <div className='ButtonRestricter'>
                <button className='ContactFormSelector' onClick={HandleClickToFalsify}>Want To Hire the Coop?</button>
                <div className={visible ? 'Underline NotUnderlinedButton' : 'Underline UnderlinedButton'}></div>
            </div>
            <div className='Spacer5'></div>
            <div className='ButtonRestricter'>
                <button className='ContactFormSelector' onClick={HandleClickToVerify}>Be part of ANIMUS</button>
                <div className={visible ? 'Underline UnderlinedButton' : 'Underline NotUnderlinedButton'}></div>
            </div>
        </div>
        <div className={visible ? 'NotVisible' : 'Visible'}>
            <ContactFormHireTheCoop />
        </div>
        <div className={visible ? 'Visible' : 'NotVisible'}>
            <ContactSubmitResume />
        </div>

    </div>
}


export default ContactForm