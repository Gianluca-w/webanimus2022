import React, { useState } from 'react';
import ContactFormHireTheCoop from './ContactHireCoop';
import ContactSubmitResume from './ContactSubmitResume';
export async function SendMail(type ,contentName ,contentMail ,contentPhone ,contentMessage ,resume){
    
    switch (type){
        case "hire":
          let response = await fetch('/api/mailing', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                  },
                body: `{"name":${contentName},
                        "mail":${contentMail},
                        "phone":${contentPhone},
                        "message":${contentMessage}}`
              });
            let result = await response.json()
            
            console.log(result)
            break;
        case "resume":       
            console.log(name);
            console.log(mail); 
            console.log(phone);
            console.log(message);
            console.log("here be Resume")
        break;
    }
}
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
            
        </form>
    </div>
}


export default ContactForm