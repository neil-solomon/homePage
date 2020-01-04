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

  elementStlye = {
    display: "inline-block",
    marginLeft: "50px",
    marginRight: "50px"
  };

  nameStyle = {
    fontSize: "25px",
    cursor: "pointer",
    display: "block",
    textAlign: "center"
  };

  underscoreStyle = {
    fontSize: "25px",
    cursor: "pointer",
    display: "block",
    textAlign: "center",
    marginTop: "-25px"
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

    return (
      <div
        style={this.elementStlye}
        onClick={() => this.props.handleClick(this.props.id)}
        onMouseEnter={this.hoverIn}
        onMouseLeave={this.hoverOut}
      >
        <div style={this.nameStyle} className={this.state.nameClassName}>
          {this.props.name}
        </div>
        <div style={this.underscoreStyle} className={underscoreClassName}>
          {this.props.underscore}
        </div>
      </div>
    );
  }
}

export default MenuElement;
