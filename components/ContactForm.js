import React, { useState } from 'react';



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
    return <div >
        <button className={visible ? 'NotUnderlinedButton ContactFormSelector' : 'UnderlinedButton ContactFormSelector'} onClick={HandleClickToFalsify}>Want To Hire the Coop?</button>
        <button className={visible ? 'UnderlinedButton ContactFormSelector' : 'NotUnderlinedButton ContactFormSelector'} onClick={HandleClickToVerify}>Be part of ANIMUS</button>
        <form action="/api/mailing" method="post">
            <div className={visible ? 'NotVisible' : 'Visible'}>

                <ContactFormHireTheCoop />

            </div>
            <div className={visible ? 'Visible' : 'NotVisible'}>

                <ContactFormHiring />

            </div>
            <div className="ContactFormSendWrapper" ><button className='ContactFormSend' type='submit'>Send</button></div>
        </form>
    </div>
}
const ContactFormHireTheCoop = ({ }) => {
    return <div className={`ContactFormWrapper`}>

        <div className='ContactFormUnderlining'>

            <div className='ContactFormInputWrapper'>
                <div className='ContactFormWideInput'>
                    <p>Name</p>
                    <input type="text" placeholder='Name' name='nName'></input>
                </div>
                <div className='ContactFormWideInput'>
                    <p>Email</p>
                    <input type="mail" placeholder='Email' name='mail'></input>
                </div>
                <div className='ContactFormPhoneInput'>
                    <p>Phone</p>
                    <input type="text" placeholder='Phone' name='phone'></input>
                </div>
            </div>
        </div>
        <div className='ContactFormUnderlining'>
            <div className='ContactFormInputWrapper'>
                <div className='ContactFormWideInput'>
                    <p>Message</p>
                    <textarea type='text' placeholder='Your message' name='message'>

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
                    <input type="text" placeholder='NAME'></input>
                </div>
                <div className='ContactFormWideInput'>
                    <p>Email</p>
                    <input type="mail" placeholder='EMAIL'></input>
                </div>
                <div className='ContactFormPhoneInput'>
                    <p>Phone</p>
                    <input type="text" placeholder='PHONE'></input>
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
                    <textarea type='text' placeholder='Message'>
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