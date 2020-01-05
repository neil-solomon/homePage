import React from "react";

class About extends React.Component {
  state = {
    animationTimeout: null
  };

  componentDidMount() {
    var animationTimeout = setTimeout(() => this.animationTimeout(), 1000);
    this.setState({ animationTimeout });
  }

  componentWillUnmount() {
    clearTimeout(this.state.animationTimeout);
  }

  animationTimeout = () => {
    clearTimeout(this.state.animationTimeout);
    this.setState({ animationTimeout: null });
  };

  render() {
    if (this.state.animationTimeout != null) {
      return null;
    }
    var className;
    if (this.props.transitionOut) {
      className = "menuContentTransitionOut";
    } else {
      className = "menuContentTransitionIn";
    }

    var style;
    if (this.props.windowIsLandscape) {
      style = {
        textAlign: "center",
        padding: "30px",
        fontSize: "20px",
        color: "rgb(0, 0, 0, 0.75)"
      };
    } else {
      style = {
        textAlign: "center",
        paddingLeft: "10px",
        paddingRight: "10px",
        paddingTop: "20px",
        fontSize: "18px",
        color: "rgb(0, 0, 0, 0.75)"
      };
    }

    return (
      <div className={className}>
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
