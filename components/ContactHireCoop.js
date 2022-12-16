import { useState } from "react"

const ContactFormHireTheCoop = ({ }) => {
    const [name, setName] = useState("");
    const [mail, setMail] = useState("");
    const [phone, setPhone] = useState("");
    const [message, setMessage] = useState("");
    function SanitizeGeneral(ToSanitize,ReturnTo,MaxLength=580,Desinfectant=/[/[\]{}"'$]/g){
        ToSanitize.value=ToSanitize.value.slice(0,MaxLength)
        const SanitizedValue = ToSanitize.value.replaceAll(Desinfectant,"")
        if (ReturnTo=="Name") {setName(SanitizedValue);}
        if (ReturnTo=="Mail") {setMail(SanitizedValue);}
        if (ReturnTo=="Phone") {ToSanitize.value=SanitizedValue; setPhone(SanitizedValue);}
        if (ReturnTo=="Message") {setMessage(SanitizedValue);}
    }

    return <div className={`ContactFormWrapper`}>

        <div className='ContactFormUnderlining'>

            <div className='ContactFormInputWrapper'>
                <div className='ContactFormWideInput'>
                    <p>Name</p>
                    <input type="text" placeholder='Name' name='name' onChange={(event) => SanitizeGeneral(event.target,"Name",30)}></input>
                </div>
                <div className='ContactFormWideInput'>
                    <p>Email</p>
                    <input type="text" placeholder='Email' name='mail' onChange={(event) => SanitizeGeneral(event.target, "Mail",35)}></input>
                </div>
                <div className='ContactFormPhoneInput'>
                    <p>Phone</p>
                    <input type="text" placeholder='Phone' name='phone' onChange={(event) => SanitizeGeneral(event.target, "Phone",15,/[^0-9+]/g)}></input>
                </div>
            </div>
        </div>
        <div className='ContactFormUnderlining'>
            <div className='ContactFormInputWrapper'>
                <div className='ContactFormWideInput'>
                    <p>Message</p>
                    <textarea type='text' placeholder='Your message' name='message' className='' onChange={(event)=>SanitizeGeneral(event.target,"Message")}>

                    </textarea>
                </div>
            </div>
        </div>
    </div>
}
export default ContactFormHireTheCoop