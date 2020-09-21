import React from "react"

// function Header()
// {
//   return(
//     <header className="HeadStyle">
//       <h3>Hello, {this.props.greetTarget}!</h3>
//     </header>
//   );
// }

// the above function can also be wriiten in this way (Defining Components)
// class Header extends React.Component 
// {
//   render()
//   {
//      return(
//       <header className="HeadStyle">
//         <h3>Hello, {this.props.greetTarget}!</h3>
//           {this.props.children}
//       </header>
//     );
//   }
// }
// export default Header;

// class Letter extends React.Component
// {
//   render()
//   {
//     let letterStyle =
//     {
//       backgroundColor: this.props.bgcolor,
//       color: "#333",
//       display: "inline-block",
//     };
//     return(
//       <div style={letterStyle}>
//         {this.props.children}
//       </div>
//     );
//   }
// }
// export default Letter;

class Resimage extends React.Component
{
  render()
  {
    return(
      <div>
        <img src="https://unsplash.com/photos/5RBXc7R-YWs/download"/>
      </div>);
  }
}

class Rescaption extends React.Component
{
  render()
  {
    return(
      <div>
        <p>The tiger is the National Animal of India.</p>
      </div>);
  }
}

class Reslink extends React.Component
{
  render()
  {
    return(
      <div>
        <a href="https://en.wikipedia.org/wiki/Tiger">Tigers</a>
      </div>);
  }
}

export default Resimage;
export default Rescaption;
export default Reslink;




