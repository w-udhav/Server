const express = require("express");
const nodemailer = require("nodemailer");
const app = express();
const bodyParser = require('body-parser');
const cors = require('cors');
require("dotenv").config();

app.use(cors())
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

let transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    type: "OAuth2",
    user: "highhopestutoring.canningvale@gmail.com",
    pass: "",
    clientId: "1014401360433-kl2joalk5lomdsohpq8kva26tg8ke8qb.apps.googleusercontent.com",
    clientSecret: "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",
    refreshToken: "1//04j53BH23llcNCgYIARAAGAQSNwF-L9IrYVENbH2tID_UvOh1UQFClIuQW6X7m23yasUfxXtIj4_8bNi2irXtD_8gAz5Wfh-vflA",
  },
});


app.post("/send", function (req, res) {
  const data = req.body
  console.log(data)
  let mailOptions = {
    from: 'highhopestutoring.canningvale@gmail.com',
    to: `highhopestutoring.canningvale@gmail.com`,
    subject: `Assessment Form`,
    html:
      `
      <div style='font-family:arial'>
      <h1> Assessment &nbsp; Form </h1>

      <div>
          <h2 style='margin-top:70px; color:royalblue;'> Student Details: </h2>
          <table style='border-bottom:1px solid black; min-width:30%;text-align:left'>
              <tr>
                  <th> Name:: </th>
                  <td> ${data.name} </td>
                  
              </tr>
              <tr>
                  <th> Email:: </th>
                  <td> ${data.email} </td>
              </tr>
              <tr>
                  <th> Subject:: </th>
                  <td> ${data.subject} </td>
              </tr>
              <tr>
                  <th> Mesage:: </th>
                  <td> ${data.message} </td>
              </tr>
          </table>
      </div>
  </div>
      `
  }

  transporter.sendMail(mailOptions, function (err, data) {
    if (err) {
      return res.json({error: err});
    } else {
      return res.json({
        message: "Sent successfully!"
      });
    }
  });
});

// Enrollment Form
app.post("/sendform", function (req, res) {
  const data = req.body
  console.log(data)
  let mailOptions = {
    from: 'highhopestutoring.canningvale@gmail.com',
    to: `highhopestutoring.canningvale@gmail.com`,
    subject: `Enrolment Form`,
    html:
      `
      <div style='font-family:arial'>
        <h1> Assessment Form </h1>

          <div>
            <h2 style='margin-top:70px; color:royalblue;'> Student Details: </h2>
            <table style='border-bottom:1px solid black; width:80%;text-align:left'>
                <tr>
                    <th> Name: </th>
                    <td> ${data.firstName} &nbsp; ${data.lastName}</td> 
                    <th> Date of Birth: </th>
                    <td> ${data.dob} </td>
                </tr>
                <tr>
                    <th> Gender: </th>
                    <td> ${data.gender} </td>
                    <th> School Name: </th>
                    <td> ${data.schoolName} </td>
                </tr>
                <tr>
                    <th> Year: </th>
                    <td> ${data.year} </td>
                    <th> Home Address: </th>
                    <td> ${data.homeAdd} </td>
                </tr>
                <tr>
                    <th> Suburb: </th>
                    <td> ${data.subUrb} </td>
                    <th> Postcode: </th>
                    <td> ${data.postCode} </td>
                </tr>
                <tr>
                    <th> Student Email: </th>
                    <td> ${data.studentEmail} </td>
                </tr>
            </table>

            <h2 style='margin-top:70px; color:royalblue;'> Parents Details: </h2>
            <table style='border-bottom:1px solid black; width:80%; text-align:left'>
                <tr>
                    <th> Name 1: </th>
                    <td> ${data.parentName1} </td>
                    <th> Relation 1: </th>
                    <td> ${data.relation1} </td>
                </tr>
                <tr>
                    <th> Email 1: </th>
                    <td> ${data.parentEmail1} 1 </td>
                    <th> Contact: </th>
                    <td> ${data.parentCont1} </td>
                </tr>
                <tr>
                    <td> </td>
                </tr>
                <tr>
                    <th> Name 2: </th>
                    <td> ${data.parentName2} </td>
                    <th> Relation 2: </th>
                    <td> ${data.relation2} </td>
                </tr>
                <tr>
                    <th> Email 2: </th>
                    <td> ${data.parentEmail2} </td>
                    <th> Contact 2: </th>
                    <td> ${data.parentCont2} </td>
                </tr>
            </table>

            <h2 style='margin-top:70px; color:royalblue;'> Authorized Person Details: </h2>
            <table style='border-bottom:1px solid black; width:80%; text-align:left'>
                <tr>
                    <th> Name 1: </th>
                    <td> ${data.authPerson1} </td>
                    <th> Contact 1: </th>
                    <td> ${data.authCont1} </td>
                </tr>
                <tr>
                    <th> Relation 1: </th>
                    <td> ${data.authRelation1} </td>
                </tr>
                <tr>
                    <td> </td>
                </tr>
                <tr>
                    <th> Name 2: </th>
                    <td> ${data.authPerson2} </td>
                    <th> Contact 2: </th>
                    <td> ${data.authCont2} </td>
                </tr>
                <tr>
                    <th> Relation 2: </th>
                    <td> ${data.authRelation2} </td>
                </tr>
            </table>

            <h2 style='margin-top:70px; color:royalblue;'> Health Details: </h2>
            <p>1. Is your child allergic to any food? <span> <b> ${data.foodAllergy} </b> </span> </p>
            <p>2. Is your child on medication? <span> <b> ${data.medication} </b> </span> </p>
            <p>3. Does your child allergic to any medications? <span> <b> ${data.medAllergy} </b> </span> </p>
            <p>4. Does your child suffer from any health problem? <span> <b> ${data.healthProb} </b> </span> </p>
          </div>
        
          <h4 style='margin-top:70px; color:royalblue;'> Signature : <span style='color:black'> ${data.sign} </span> </h4>
      </div>
      `
  }

  transporter.sendMail(mailOptions, function (err, data) {
    if (err) {
      console.log("Error" + err);
    } else {
      console.log("Email sent successfully");
      // console.log(res.status)
    }
  });
});




const port = process.env.PORT || 4000;
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
