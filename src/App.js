import React from "react";
import "./style.css";

import Joke from "./Joke"

class App extends React.Component
{
  render()
  {
    return(
      <div>
        <Joke 
        question="Dad, did you get a haircut?"
        answer="No, I got them all cut!"/>

        <Joke 
        question="How do you get a squirrel to like you?"
        answer="Act like a nut"/>

        <Joke 
        question="Why don't eggs tell jokes?"
        answer="They'd crack each other up."/>

        <Joke 
        question="What do you call someone with no body and no nose?"
        answer="Nobody knows"/>

        <Joke 
        question="Did you hear the rumor about butter?"
        answer="Well, I'm not going to spread it!"/>
      </div>
    );
  }
}

export default App;
