"use strict";
const nodemailer = require("nodemailer");


export default async function handler(req, res) {
  async function main() {
    
    if(!req.body.Name){return  res.status(400).json({ Response:"Mail Failed" ,error:"Empty name detected"})}
    if(!req.body.Mail){return  res.status(400).json({ Response:"Mail Failed", error:"Empty mail detected"})}
    if(!req.body.Phone){return  res.status(400).json({ Response:"Mail Failed", error:"Empty phone detected"})}
    if(!req.body.Message){return  res.status(400).json({ Response:"Mail Failed", error:"Empty message detected"})}
    console.log(process.env.MAILR_USR);
//Endo of the Security*/
    // create reusable transporter object using the default SMTP transport
    const transporter = nodemailer.createTransport({
      host: "smtp.gmail.com",
      port: 465,
      secure: true, 
      auth: {
        user: process.env.MAILR_USR, 
        pass:process.env.MAILR_PASS
      },
    });

    // send mail with defined transport object
    switch (req.body.HandlerType) {
      case "hire":

      let WorkMail = await transporter.sendMail({
        from: `${process.env.MAILR_USR}@gmail.com`, // sender address
        to: 'barreyro.gian@gmail.com', // list of receivers, usually info@animus.com.ar
        subject: "Llamado al trabajo", // Subject line
        text:"Filler Text",
        html: "<b>Funca</b>", // html body
  /*
        attachments: [
          {
              filename: 'Curriculum.pdf',
              path: 'C:/Users/Username/Desktop/somefile.pdf',                                         
              contentType: 'application/pdf'
          }],
  */
        replyTo:"barreyro.gian@gmail.com" //Substitute for req.mail
      });
      console.log("Message sent: %s", WorkMail.messageId);
        
      break;
      case "resume":
        let ResumeMail = await transporter.sendMail({
          from: `${process.env.MAILR_USR}@gmail.com`, // sender address
          to: 'barreyro.gian@gmail.com', // list of receivers, usually info@animus.com.ar
          subject: "Llamado al trabajo", // Subject line
          text:"FIller Text",
          html: "<b>Funca</b>", // html body
          attachments: [
            {
                filename: `${req.body.Name}Curriculum.pdf`,
                path: 'C:/Users/Username/Desktop/somefile.pdf',                                         
                contentType: 'application/pdf'
            }],
          replyTo:"barreyro.gian@gmail.com" //Substitute for req.mail
        });
        console.log("Message sent: %s", ResumeMail.messageId);
      break;
    
      default:
        res.status(500).json({ Response:"Mail unsuccessfully Sent"})
        break;
    }
    res.status(200).json({ Response:"Mail Succesfully Sent"})
  }
  main().catch(console.error)//.then(res.status(400).json({ Response:"Mail Failed"}));
}
