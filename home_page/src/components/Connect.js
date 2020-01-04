import React from "react";
import { Icon } from "antd";

class Connect extends React.Component {
  state = {
    animationTimeout: null,
    iconClassNames: ["connectIcon", "connectIcon"] // linkedin icon, github icon
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

  hoverIn = value => {
    var iconClassNames = [...this.state.iconClassNames];
    iconClassNames[value] = "connectIconHoverIn";
    this.setState({ iconClassNames });
  };

  hoverOut = value => {
    var iconClassNames = [...this.state.iconClassNames];
    iconClassNames[value] = "connectIconHoverOut";
    this.setState({ iconClassNames });
  };

  textStyle = {
    textAlign: "center",
    padding: "30px",
    fontSize: "20px"
  };

  render() {
    if (this.state.animationTimeout != null) {
      return null;
    }

    var containerClassName;
    if (this.props.transitionOut) {
      containerClassName = "menuContentTransitionOut";
    } else {
      containerClassName = "menuContentTransitionIn";
    }

    return (
      <div className={containerClassName}>
        <div style={this.textStyle}>
          Please connect with me on LinkedIn! Also, check out the source code
          for all of my projects on Github.
        </div>
        <div className="connectIcons">
          <a href="https://www.linkedin.com/in/neil-solomon/" target="blank">
            <span className={this.state.iconClassNames[0]}>
              <Icon
                onMouseEnter={() => this.hoverIn(0)}
                onMouseLeave={() => this.hoverOut(0)}
                type="linkedin"
              ></Icon>
            </span>
          </a>
          <a href="https://github.com/neil-solomon" target="blank">
            <span className={this.state.iconClassNames[1]}>
              <Icon
                onMouseEnter={() => this.hoverIn(1)}
                onMouseLeave={() => this.hoverOut(1)}
                type="github"
              ></Icon>
            </span>
          </a>
        </div>
      </div>
    );
  }
}

export default Connect;
