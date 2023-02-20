import React, { useState } from 'react';
import Users from './components/Users';
import Questions from './components/Questions';
// const { question } = require("../db/seedData");

function App() {
  const [state, setState] = useState("users")
  const [index, setIndex] = useState(0)

  const nextQuestion = function() {
    if(index<9){
    setIndex(index + 1)
    }
    else{
      setState("finished")
    }
   }
   const getQuestionNumber = function() {
    return index;
   }

    return (
      <div>
        <header>
          <p>BrainBuster</p>
        </header>

      {state === "users" &&
      <><Users />
      <button onClick={() =>setState("questions")}>Start the quiz</button>
     </>}

     {state === "questions" &&
     <><Questions index= {index}/>
     <button onClick={nextQuestion}> Next </button></>
     }

    {state === "finished" &&
    <p>Done!</p>
     }

      </div>
    );
}

export default App;
