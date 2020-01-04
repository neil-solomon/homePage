import React from "react";

class PortfolioItem extends React.Component {
  headingStyle = {
    fontSize: "20px",
    color: "rgb(125,0,255)",
    cursor: "pointer"
  };

  descriptionStyle = {
    fontSize: "20px",
    color: "rgb(0,0,0,.75)"
  };

  containerStyle = {
    display: "inline-block",
    padding: "10px",
    width: "38vw",
    height: "400px",
    marginLeft: "1vw",
    marginRight: "1vw",
    textAlign: "center",
    verticalAlign: "top"
  };

  imageStyle = {
    width: "90%",
    height: "200px",
    radius: "30%",
    cursor: "pointer",
    boxShadow: "0px 0px 5px rgb(0,0,0,.2)",
    borderRadius: "50px"
  };

  render() {
    return (
      <div style={this.containerStyle}>
        <a href={this.props.link} target="blank">
          <img
            style={this.imageStyle}
            src={this.props.image}
            alt={this.props.name}
          ></img>
          <div style={this.headingStyle}>{this.props.name}</div>
        </a>
        <div style={this.descriptionStyle}>{this.props.description}</div>
      </div>
    );
  }
}

export default PortfolioItem;
