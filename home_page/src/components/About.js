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

  style = {
    textAlign: "center",
    padding: "30px",
    fontSize: "20px"
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

    return (
      <div className={className}>
        <div style={this.style}>
          Hello!<br></br>
          <br></br>I am Neil Solomon, a student majoring in Computer Engineering
          and working part-time in software development. I have experience with
          C++, Python, and Javascript and I love creating interactive web pages
          using React. Check out my portfolio for examples of my projects.
        </div>
      </div>
    );
  }
}

export default About;
