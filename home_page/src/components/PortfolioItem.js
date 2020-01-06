import React from "react";

class PortfolioItem extends React.Component {
  state = { imageClassName: "portfolioImage" };

  imageStyle = {
    width: "100%",
    height: "auto",
    cursor: "pointer",
    borderRadius: "5px",
    boxShadow: "0px 2.5px 5px rgb(69, 90, 100, 0.25)"
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
        color: "#009688",
        cursor: "pointer"
      };
      descriptionStyle = {
        fontSize: "20px",
        color: "rgb(33,33,33)"
      };
    } else {
      containerStyle = {
        display: "inline-block",
        width: "80vw",
        marginTop: "20px",
        marginLeft: "5vw",
        marginRight: "5vw",
        height: "375px",
        textAlign: "center",
        verticalAlign: "top"
      };
      headingStyle = {
        fontSize: "18px",
        color: "#009688",
        cursor: "pointer"
      };
      descriptionStyle = {
        fontSize: "18px",
        color: "rgb(33,33,33)"
      };
    }

    return (
      <div style={containerStyle}>
        <a href={this.props.link} target="blank">
          <img
            style={this.imageStyle}
            className={this.state.imageClassName}
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
