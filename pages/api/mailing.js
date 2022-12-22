"use strict";
const nodemailer = require("nodemailer");


export default async function handler(req, res) {
  async function main() {
    console.log(req)
    console.log(req.body)
    console.log(req.body.name)
    return res.status(200).json({response:"Recived" , data:req.body.name})
    if(!req.body.name){return  res.status(400).json({ Response:"Mail Failed" ,error:"Empty name detected"})}
    if(!req.body.mail){return  res.status(400).json({ Response:"Mail Failed", error:"Empty mail detected"})}
    if(!req.body.phone){return  res.status(400).json({ Response:"Mail Failed", error:"Empty phone detected"})}
    if(!req.body.message){return  res.status(400).json({ Response:"Mail Failed", error:"Empty message detected"})}
    console.log("Clauses Abided")
//Endo of the Security*/
    // create reusable transporter object using the default SMTP transport
    const transporter = nodemailer.createTransport({
      host: "smtp.gmail.com",
      port: 465,
      secure: true, 
      auth: {
        type: "OAuth2",
        user: process.env.MAILR_USR, 
        clientId:process.env.MAILR_CLIENT_ID,
        clientSecret:process.env.MAILR_CLIENT_SECRET,
        refreshToken:"1//04fHtlIblol2lCgYIARAAGAQSNwF-L9IrZTFRuxMfhVNVqi1MrFSCV7iP1_i8dkK_GKfL7EcGn7SXrcETszOZm3mdNS13dvzRFVg"//process.env.MAILR_REFRESH_TOKEN
      },
    });

    // send mail with defined transport object
    let info = await transporter.sendMail({
      from: `${process.env.MAILR_USR}@gmail.com`, // sender address
      to: 'barreyro.gian@gmail.com', // list of receivers, usually info@animus.com.ar
      subject: "Llamado al trabajo", // Subject line
      text:"FIller Text",
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
  
    console.log("Message sent: %s", info.messageId);
    // Message sent: <b658f8ca-6296-ccf4-8306-87d57a0b4321@example.com>
    res.status(200).json({ Response:"Mail Succesfully Sent"})
  }
  main().catch(console.error)//.then(res.status(400).json({ Response:"Mail Failed"}));
}
