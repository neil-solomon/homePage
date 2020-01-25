import React from "react";

class About extends React.Component {
  render() {
    var style;
    if (this.props.windowIsLandscape) {
      style = {
        textAlign: "center",
        padding: "30px",
        fontSize: "20px",
        color: "rgb(33,33,33)"
      };
    } else {
      style = {
        textAlign: "center",
        paddingLeft: "10px",
        paddingRight: "10px",
        paddingTop: "20px",
        fontSize: "18px",
        color: "rgb(33,33,33)"
      };
    }

    return (
      <div>
        <div style={style}>
          Hello!<br></br>
          <br></br>I am a student majoring in Computer Engineering and working
          part-time in software development. I have experience with C++, Python,
          and Javascript and I love creating interactive web pages using React.
          Check out my portfolio for examples of my projects!
        </div>
      </div>
    );
  }
}

export default About;
