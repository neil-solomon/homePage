import React from "react";
import { Icon } from "antd";

class Connect extends React.Component {
  state = {
    iconClassNames: ["connectIcon", "connectIcon", "connectIcon"] // linkedin icon, github icon,email
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

  render() {
    var textStyle;
    if (this.props.windowIsLandscape) {
      textStyle = {
        textAlign: "center",
        padding: "30px",
        fontSize: "20px",
        color: "rgb(0,0,0,.75)"
      };
    } else {
      textStyle = {
        textAlign: "center",
        paddingLeft: "10px",
        paddingRight: "10px",
        paddingTop: "20px",
        fontSize: "18px",
        color: "rgb(0,0,0,.75)"
      };
    }

    return (
      <div>
        <div style={textStyle}>
          Please shoot me an email and connect with me on LinkedIn! Also, check
          out the source code for all of my projects on Github.
        </div>
        <div className="connectIcons">
          <a href="mailto:neilsolomon89@gmail.com">
            <span className={this.state.iconClassNames[2]}>
              <Icon
                onMouseEnter={() => this.hoverIn(2)}
                onMouseLeave={() => this.hoverOut(2)}
                type="mail"
              ></Icon>
            </span>
          </a>
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
