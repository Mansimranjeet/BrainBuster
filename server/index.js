require("dotenv").config();
const express = require('express');
const app = express();
const path = require('path');
const Users = require('./routes/Users');
const Questions = require('./routes/Questions');
const { users, questions } = require("/Users/stup/Documents/Multiverse/BrainBuster/db/seedData");

app.use(express.urlencoded({ extended: false }));
app.use('/api/users', Users);
app.use('/api/questions', Questions);

const MessagingResponse = require("twilio").twiml.MessagingResponse;

//test start
app.get('/api', (request, response) => {
    response.send('Hello world from Express!');
});

app.get('/add', (request, response) => {
    users.push(
        {
            name: "wrwr",
            phoneNumber: "32",
            score:5
        }
    )
    response.send("Added")
});

app.get('/index', (req, res) => {
    res.send(index)
})

//test end!!

//
app.post("/sms", async (req, res) => {
    const twiml = new MessagingResponse();
    const SMS = twiml.message();
    const recievedSMS = req.body.Body.toLowerCase().trim();
    const {ProfileName, From} = req.body;
    const firstWord = recievedSMS.split(" ")[0];
  
    
    if (firstWord == 'start') {
  
      SMS.body(`Hey ${ProfileName},`);
      SMS.body(`Welcome to BrainBuster`);
      SMS.body(`Please wait for host to start the game`);
  
    } else {
      users.push(
        {
            name: ProfileName,
            phoneNumber: From,
            score:0
        }
      )
      SMS.body(
        'You have added'
      );
    }
  
    res.writeHead(200, { "Content-Type": "text/xml" });
    res.end(twiml.toString());
  });
  
app.listen(1234); 