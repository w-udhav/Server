const express = require("express");
const nodemailer = require("nodemailer");
const app = express();
const cors = require('cors')
require("dotenv").config();

app.use(cors())

let transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      type: "OAuth2",
      user: "ambrewster24@gmail.com",
      pass: "",
      clientId: "826262925552-1148ei1vit8ct556565pn8kgtfaesbmb.apps.googleusercontent.com",
      clientSecret: "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",
      refreshToken: "1//049TDRiGtrTlnCgYIARAAGAQSNgF-L9IrlulrUP-Y5ca1bptyPCIerUx1J67Og12_HklnfPvHPPP_bBYWNIlo8dkQQqRO4znzfw",
    },
   });


app.post("/send", function (req, res) {
    let mailOptions = {
        from: 'ambrewster24@gmail.com',
        to:'ujjwalcpj@gmail.com',
        subject: 'test 2 email',
    }
    
    transporter.sendMail(mailOptions, function (err, data) {
     if (err) {
       console.log("Error " + err);
     } else {
       console.log("Email sent successfully");
     }
    });
});



const port = 4000;
app.listen(port, () => {
 console.log(`Server is running on port: ${port}`);
});





// const express = require('express')
// const app = express()

// require('dotenv').config()

// const bodyParser = require('body-parser')
// const cors = require('cors')
// const nodemailer = require('nodemailer')

// app.use(bodyParser.urlencoded({extended: true}))
// app.use(bodyParser.json())

// app.use(cors())

// app.post('/send_mail', cors(), async(req, res) => {
//     console.log("Hello")
//     let { user } = req.body

    // const transport = nodemailer.createTransport({
    //     host: 'smtp.mailtrap.io',
    //     port: 465,
    //     secure: false,
    //     auth: {
    //         user: 'ce543c72972be0',
    //         pass: '92632596f74339'
    //     },
    //     tls: {
    //         ciphers:'SSLv3'
    //     }
    // })
//     console.log(res.respMsg)

    // await transport.sendMail({
    //     from: 'ambrewster24@gmail.com',
    //     to:'test@test.com',
    //     subject: 'test email',
    //     html: `
    //         <div>
    //             <p> hello </p>
    //         </div>`
    // })

// })


// var listener = app.listen(4000, () => {
//     console.log(`Server is listening on port ${listener.address().port}`)
// })