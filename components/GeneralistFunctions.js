 /**
   * Send a mail via api/mailing, Required Params depend on the type                  
   * type "hire" requires ContentName, TargetMail, ContentPhone & ContentMessage                    
   * type "resume" requires ContentName, TargetMail, ContentPhone, ContentMessage & ContentResume        
   * currently does not yield any response
   */
export const SendMail= async (type, ContentName, TargetMail, ContentPhone, ContentMessage, ContentResume) => {

    switch (type) {
        case "hire":
            let WorkOffer = { Name: ContentName, Mail: TargetMail, Phone: ContentPhone, Message: ContentMessage, HandlerType: type };
            let response = await fetch('/api/mailing', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(WorkOffer)
            });
            let result = await response.json()

            console.log(result)
            break;
        case "resume":
            let ResumeUpload = { Name: ContentName, Mail: TargetMail, Phone: ContentPhone, Message: ContentMessage, Resume: ContentResume, HandlerType: type };
            console.log(ResumeUpload)
            break;
    }
}
 /**
   * Provide a input that will be sanitized, default Desinfectant is /[]{}'$   
   * Default MaxLength is 580 caracters, doesn't disinfect before shortening the value
   * so it will cut valid letters that are outside of its max range
   */
export function SanitizeGeneral(ToSanitize, MaxLength = 580, Desinfectant = /[/[\]{}'$]/g) {
   

    ToSanitize.value=ToSanitize.value.slice(0,MaxLength)
    const SanitizedValue = ToSanitize.value.replaceAll(Desinfectant,"")
    ToSanitize.value = SanitizedValue
    return SanitizedValue
    
}
