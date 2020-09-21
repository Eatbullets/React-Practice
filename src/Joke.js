import React from "react"

class Joke extends React.Component
{
   
  render()
  {
   let jq = 
    {
      backgroundColor: "magenta"
    };
    let ja = 
    {
      backgroundColor: "#00ff00"
    }
    return(
    <div >
        <h4 style={jq}>Question: {this.props.question}</h4>
        <h4 style={ja}><i>Answer: {this.props.answer}</i></h4>
        <hr/>
    </div>
  );
  }
};

export default Joke;