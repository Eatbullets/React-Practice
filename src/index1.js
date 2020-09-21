import React from "react";
import ReactDOM from "react-dom";
import "./style.css";

// import App from "./App";
// import Letter from "./Header"

// ReactDOM.render
// (<div>
//   <App / > 

//   <Header greetTarget="Vedant">
//     <p>This is a paragraph</p>
//   </Header>

// </div>, document.getElementById("root"));
 
 /* 
 ReactDOM.reder takes 2 parameters - JSX element, destination 
 */

// ReactDOM.render
// (
//   <div>
//     <Letter bgcolor="#58B3FF">A</Letter>
//     <Letter bgcolor="#FF605F">E</Letter>
//     <Letter bgcolor="#FFD52E">I</Letter>
//     <Letter bgcolor="#49DD8E">O</Letter>
//     <Letter bgcolor="#AE99FF">U</Letter>
//   </div>, document.getElementById("root"));


class Resimage extends React.Component
{
  render()
  {
    return(
      <div>
        <img src={this.props.src} height={this.props.height} />
      </div>);
  }
}

class Rescaption extends React.Component
{
  render()
  {
    return(
      <div>
        <p>{this.props.caption}</p>
      </div>);
  }
}

class Reslink extends React.Component
{
  render()
  {
    return(
      <div>
        <a href={this.props.href}>{this.props.linktext}</a>
      </div>);
  }
}

class FInal extends React.Component
{
  render()
  {
    return(
      <div className="result">
        <Resimage {...this.props}/>
        <Rescaption {...this.props}/>
        <Reslink {...this.props}/>
      </div>
    )
  }
}

ReactDOM.render
(
  <div>
    <FInal src="https://unsplash.com/photos/5RBXc7R-YWs/download" height="300"  
    caption="The tiger is the National Animal of India." href="https://en.wikipedia.org/wiki/Tiger" 
    linktext="Tiger"/>

    <FInal src="https://cdn.hswstatic.com/gif/peacock-feathers.jpg" height="350" 
    caption="Peacock is the national bird of India." href="https://en.wikipedia.org/wiki/Peacock-pheasant"
    linktext="Peacock"/ >

  </div>,document.getElementById("root"));
