require("dotenv").config();
let { db, Users, Questions, CurrentQuestion } = require("../db");
const express = require("express");
const app = express();
const path = require("path");
const usersRoute = require("./routes/Users");
const questionsRoute = require("./routes/Questions");

app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use("/api/users", usersRoute);
app.use("/api/questions", questionsRoute);

const MessagingResponse = require("twilio").twiml.MessagingResponse;

//test start
app.get("/api", (request, response) => {
  response.send("Hello world from Express!");
});

app.get("/add", async (request, response) => {
  await Users.findOrCreate({
    where: {
      name: "wrwr",
      phoneNumber: "32",
      score: 5,
    },
  });
  response.send("Added");
});

app.get("/index", async (req, res) => {
  // fetch('http://localhost:1234/api/update')
  // .then(response => response.json())
  // .then(data => {
  //     currentQuestion = res.json(data)
  // });
  res.json(CurrentQuestion.findOne());
});

//test end!!

//

async function checkAnswer(answer, number) {
  let currentQuestion = await CurrentQuestion.findOne({ where: { id: 1 } });
  const question = await Questions.findOne({
    where: { id: currentQuestion.value + 1 },
  });

  if (question.answer.toLowerCase() == answer) {
    Users.addScore(number);
    return true;
  } else {
    return false;
  }
}

app.post("/sms", async (req, res) => {
  const twiml = new MessagingResponse();
  const SMS = twiml.message();
  const recievedSMS = req.body.Body.toLowerCase().trim();
  const { ProfileName, From } = req.body;
  const firstWord = recievedSMS.split(" ")[0];

  if (firstWord == "start") {
 
    let user = await Users.findOrCreate({ where: {phoneNumber: From, name: ProfileName }});

    await Users.update({score: 0}, {where:{phoneNumber: From}});
    SMS.body(`Hey ${ProfileName},`);
    SMS.body(`Welcome to BrainBuster`);
  } else if (firstWord.legth > 1) {
    SMS.send("Please select a valid option");
  } else {
    if ( await checkAnswer(firstWord, From)) {
      SMS.body("Your answer is right :)");
      let Cuser = await Users.findOne({ where: { phoneNumber: From } });
      SMS.body(`Your current score = ${Cuser.score}`);
    } else {
      SMS.body("Your answer is wrong :(");
    }
  }

  res.writeHead(200, { "Content-Type": "text/xml" });
  res.end(twiml.toString());
});

const init = async () => {
  try {
    await db.sync();

    app.listen(1234, () => {
      console.log(`Server listening at http://localhost:${1234}`);
    });
  } catch (err) {
    console.error("Error starting server:", err);
  }
};
init();
