import React from "react";

class PortfolioItem extends React.Component {
  imageStyle = {
    width: "100%",
    height: "auto",
    radius: "10%",
    cursor: "pointer",
    boxShadow: "0px 0px 5px rgb(0,0,0,.2)",
    borderRadius: "20px"
  };

  render() {
    var containerStyle, headingStyle, descriptionStyle;
    if (this.props.windowIsLandscape) {
      containerStyle = {
        display: "inline-block",
        width: "35vw",
        marginTop: "30px",
        marginLeft: "5vw",
        marginRight: "5vw",
        height: "425px",
        textAlign: "center",
        verticalAlign: "top"
      };
      headingStyle = {
        fontSize: "20px",
        color: "rgb(0,0,225,.75)",
        cursor: "pointer"
      };
      descriptionStyle = {
        fontSize: "20px",
        color: "rgb(0,0,0,.75)"
      };
    } else {
      containerStyle = {
        display: "inline-block",
        width: "80vw",
        marginTop: "20px",
        marginLeft: "5vw",
        marginRight: "5vw",
        height: "425px",
        textAlign: "center",
        verticalAlign: "top"
      };
      headingStyle = {
        fontSize: "18px",
        color: "rgb(0,0,225,.75)",
        cursor: "pointer"
      };
      descriptionStyle = {
        fontSize: "18px",
        color: "rgb(0,0,0,.75)"
      };
    }

    return (
      <div style={containerStyle}>
        <a href={this.props.link} target="blank">
          <img
            style={this.imageStyle}
            src={this.props.image}
            alt={this.props.name}
          ></img>
          <div style={headingStyle}>{this.props.name}</div>
        </a>
        <div style={descriptionStyle}>{this.props.description}</div>
      </div>
    );
  }
}

export default PortfolioItem;
