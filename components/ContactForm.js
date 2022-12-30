import React, { useState } from 'react';
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
        <button className={visible ? 'NotUnderlinedButton ContactFormSelector' : 'ContactFormSelector UnderlinedButton'} onClick={HandleClickToFalsify}>Want To Hire the Coop?</button>
        <button className={visible ? 'ContactFormSelector UnderlinedButton' : 'NotUnderlinedButton ContactFormSelector'} onClick={HandleClickToVerify}>Be part of ANIMUS</button>
            <div className={visible ? 'NotVisible' : 'Visible'}>

                <ContactFormHireTheCoop />

            </div>
            <div className={visible ? 'Visible' : 'NotVisible'}>

                <ContactSubmitResume />
                
            </div>
        
    </div>
}


export default ContactForm