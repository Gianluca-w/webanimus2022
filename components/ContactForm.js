import React, { useState } from 'react';
import ContactFormHireTheCoop from './ContactHireCoop';
import ContactSubmitResume from './ContactSubmitResume';

const ContactForm = ({ contentTranslation }) => {
    return <div className={`FormWrapper`}>
        <ContactFormForm translation={contentTranslation} />
    </div>
}

const ContactFormForm = ({ translation }) => {
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
                <button className='ContactFormSelector' onClick={HandleClickToFalsify}>{translation.hireAnimus}</button>
                <div className={visible ? 'Underline NotUnderlinedButton' : 'Underline UnderlinedButton'}></div>
            </div>
            <div className='Spacer5'></div>
            <div className='ButtonRestricter'>
                <button className='ContactFormSelector' onClick={HandleClickToVerify}>{translation.joinAnimus}</button>
                <div className={visible ? 'Underline UnderlinedButton' : 'Underline NotUnderlinedButton'}></div>
            </div>
        </div>
        <div className={visible ? 'NotVisible' : 'Visible'}>
            <ContactFormHireTheCoop content={translation} />
        </div>
        <div className={visible ? 'Visible' : 'NotVisible'}>
            <ContactSubmitResume content={translation} />
        </div>

    </div>
}


export default ContactForm