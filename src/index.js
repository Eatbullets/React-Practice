import React from "react";
import ReactDOM from "react-dom";

import App from "./App"

ReactDOM.render
(
  <div>
    <App/>
  </div>,document.getElementById("root"));

// class Letter extends React.Component
// {
//   render()
//   {
//     let letterStyle =
//     {
//       backgroundColor: this.props.bgcolor,
//       color: "#333",
//       display: "inline-block",
//       fontSize: 110,
//       padding: 5
//     };
//     return(
//       <div style={letterStyle}>
//         {this.props.children}
//       </div>
//     );
//   }
// };

// ReactDOM.render
// (
//   <div>
//     <Letter bgcolor="#58B3FF">A</Letter>
//     <Letter bgcolor="#FF605F">E</Letter>
//     <Letter bgcolor="#FFD52E">I</Letter>
//     <Letter bgcolor="#49DD8E">O</Letter>
//     <Letter bgcolor="#AE99FF">U</Letter>
//   </div>, document.getElementById("root"));