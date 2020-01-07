import React from "react";

class MenuElement extends React.Component {
  state = { nameClassName: "menuElementNameHoverOut", underscoreClassName: "" };

  componentDidUpdate(prevProps) {
    if (prevProps.active && !this.props.active) {
      this.setState({ nameClassName: "menuElementNameHoverOut" });
    } else if (!prevProps.active && this.props.active) {
      this.setState({ nameClassName: "menuElementNameHoverIn" });
    }
  }

  underscoreStyle = {
    display: "block",
    textAlign: "center",
    marginTop: "5px",
    borderBottom: "1px solid #009688"
  };

  hoverIn = () => {
    this.setState({ nameClassName: "menuElementNameHoverIn" });
  };

  hoverOut = () => {
    if (this.props.active) {
      return;
    }
    this.setState({ nameClassName: "menuElementNameHoverOut" });
  };

  render() {
    var underscoreClassName;
    if (this.props.active) {
      underscoreClassName = "menuElementUnderscoreActivate";
    } else {
      underscoreClassName = "menuElementUnderscoreDeactivate";
    }

    var nameStyle, elementStyle;
    if (this.props.windowIsLandscape) {
      nameStyle = {
        fontSize: "25px",
        cursor: "pointer",
        display: "block",
        textAlign: "center",
        outline: "none"
      };
      elementStyle = {
        display: "inline-block",
        marginLeft: "50px",
        marginRight: "50px",
        outline: "none"
      };
    } else {
      nameStyle = {
        fontSize: "20px",
        cursor: "pointer",
        display: "block",
        textAlign: "center",
        outline: "none"
      };
      elementStyle = {
        display: "inline-block",
        marginLeft: "30px",
        marginRight: "30px",
        marginBottom: "10px",
        outline: "none"
      };
    }

    return (
      <div
        style={elementStyle}
        onClick={() => this.props.handleClick(this.props.id)}
        onMouseEnter={this.hoverIn}
        onMouseLeave={this.hoverOut}
      >
        <div style={nameStyle} className={this.state.nameClassName}>
          {this.props.name}
        </div>
        <div style={this.underscoreStyle} className={underscoreClassName}></div>
      </div>
    );
  }
}

export default MenuElement;
