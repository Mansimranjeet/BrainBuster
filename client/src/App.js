import React, { useState } from 'react';
import Users from './components/Users';
import Questions from './components/Questions';
import LeaderBoard from './components/LeaderBoard';


function App() {
  const [state, setState] = useState("users")
  const [index, setIndex] = useState(0)

  const nextQuestion = function() {
    if(index<9){
    setIndex(index + 1);

    fetch('/api/questions', {
      method: 'POST',
      headers: {
        "Content-Type" : "application/json",
        "accept" : "application/json"
      },
      body: JSON.stringify({index: index+1})
    })

    }
    else{
      setState("finished")
    }
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
     <button onClick={nextQuestion()}> Next </button></>
     }

     {state === "finished" &&
     <><LeaderBoard />
     </>}
    </div>
    );
}

export default App;
