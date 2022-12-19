import { useState } from "react"

const ContactSubmitResume = ({ }) => {
    const [name, setName] = useState("");
    const [mail, setMail] = useState("");
    const [phone, setPhone] = useState("");
    const [message, setMessage] = useState("");
    function SanitizeGeneral(ToSanitize, ReturnTo, MaxLength = 580, Desinfectant = /[/[\]{}"'$]/g) {
        ToSanitize.value = ToSanitize.value.slice(0, MaxLength)
        const SanitizedValue = ToSanitize.value.replaceAll(Desinfectant, "")
        if (ReturnTo == "Name") { setName(SanitizedValue); }
        if (ReturnTo == "Mail") { setMail(SanitizedValue); }
        if (ReturnTo == "Phone") { ToSanitize.value = SanitizedValue; setPhone(SanitizedValue); }
        if (ReturnTo == "Message") { setMessage(SanitizedValue); }
    }

    return <div className={`ContactFormWrapper`}>
        <div className='ContactFormUnderlining'>
            <div className='ContactFormInputWrapper'>
                <div className='ContactFormWideInput'>
                    <p>Name</p>
                    <input type="text" placeholder='Name' onChange={(event) => SanitizeGeneral(event.target, "Name", 30)}></input>
                </div>
                <div className='ContactFormWideInput'>
                    <p>Email</p>
                    <input type="mail" placeholder='Email' onChange={(event) => SanitizeGeneral(event.target, "Mail", 35)}></input>
                </div>
                <div className='ContactFormPhoneInput'>
                    <p>Phone</p>
                    <input type="text" placeholder='Phone' onChange={(event) => SanitizeGeneral(event.target, "Phone", 15, /[^0-9+]/g)}></input>
                </div>
            </div>
        </div>

        <div className='ContactFormInputWrapper'>
            <div className='ContactFormWideInput'>
                <p>Message</p>
                <textarea type='text' placeholder='Your message' name='message' className='' onChange={(event) => SanitizeGeneral(event.target, "Message")}>

                </textarea>
            </div>
            <div className='ContactFormWideInput'>
                
                <div><p style={{paddingLeft:"10px"}}>Resume</p></div>
                <div className="DragAndDropWrapper"><div className="DragAndDropArea"> Drag and Drop here</div></div>
                
            </div>
        </div>

    </div>
}
export default ContactSubmitResume