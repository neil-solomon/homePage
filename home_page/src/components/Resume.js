import React from "react";

class Resume extends React.Component {
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

    return (
      <div className={className}>
        <div className="resumeText">
          <div style={{ color: "rgb(125,0,255" }}>EDUCATION</div>
          <br></br>
          <strong>&emsp;City College of the City University of New York</strong>
          <br></br>
          &emsp;Bachelors of Engineering, Computer Engineering: June 2021. GPA:
          3.0
          <br></br>
          <br></br>
          <strong>
            &emsp;LaGuardia Community College of the City University of New York
          </strong>
          <br></br>
          &emsp;Associate in Science, Electrical Engineering: June 2018. GPA:
          3.7
          <br></br>
          <div style={{ marginTop: "10px", color: "rgb(125,0,255,.5)" }}>
            _______________________________________________
          </div>
          <br></br>
          <div style={{ color: "rgb(125,0,255" }}>COURSEWORK</div>
          <br></br>
          <strong>Completed</strong>
          <br></br>C++ for Engineers, Programming for EE (C++), Linear Algebra,
          Discrete Mathematics, Probability &amp; Statistics, Calculus I II III
          &amp; IV, Computer Aided Analysis (MATLAB), Digital Computer Systems
          <br></br>
          <br></br>
          <strong>In Progress</strong>
          <br></br>Data Structures, Algorithms, Assembly Language, Operating
          Systems, Software Design
          <br></br>
          <div style={{ marginTop: "10px", color: "rgb(125,0,255,.5)" }}>
            _______________________________________________
          </div>
          <br></br>
          <div style={{ color: "rgb(125,0,255" }}>EXPERIENCE</div>
          <br></br>
          <strong>
            GAL Manufacturing <br></br>R&amp;D Software Technician, August
            2018-present
          </strong>
          <br></br>
          Used React framework for development of the GALileo web app with a
          focus on displaying real-time data from the GALaxy elevator
          controller. Applied principles of object-oriented and functional
          programming in Python and C to improve the speed and maintainability
          of GALileo code.
          <br></br>
          <br></br>
          <strong>
            GAL Manufacturing<br></br> R&amp;D Software Intern, June 2018 -
            August 2018
          </strong>
          <br></br>
          Developed back-end code to facilitate communication between the GALaxy
          elevator controller and the new GALileo web-based application.
          Presented the new GALileo web app to company executives, showcasing
          live communication between the GALileo webpage and GALaxy elevator
          controller. Assisted in documentation of software team processes
          including GALaxy simulator set-up and testing, and software version
          control.<br></br>
          <div style={{ marginTop: "10px", color: "rgb(125,0,255,.5)" }}>
            _______________________________________________
          </div>
          <br></br>
          <div style={{ color: "rgb(125,0,255" }}>AFFILIATIONS</div>
          <br></br>
          <strong>National Society of Black Engineers</strong>
          <br></br>
          Member, 2017-present.
          <br></br>
          <br></br>
          <strong>Institute of Electronics and Electrical Engineers</strong>
          <br></br>
          Member, 2017-present.
        </div>
      </div>
    );
  }
}

export default Resume;
