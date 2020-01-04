import React from "react";
import "./homePage.css";
import MenuElement from "./MenuElement.js";
import MenuView from "./MenuView.js";
import myPicture from "./images/wedding1crop2.jpg";

class MainComponent extends React.Component {
  state = {
    activeMenu: [false, false, false, false], // about, portfolio, resume, connect
    activateMenuTimeout: null,
    changeHeaderTimeout: null,
    initialAnimation: true,
    headerClassNames: [
      "header1",
      "headerPicture1",
      "headerTitle1",
      "headerDescription1"
    ]
  };

  componentDidMount() {
    var activateMenuTimeout = setTimeout(() => this.toggleMenus(0), 2500);
    var changeHeaderTimeout = setTimeout(() => this.changeHeaderStyles(), 2400);
    this.setState({ activateMenuTimeout });
    this.setState({ changeHeaderTimeout });
  }

  componentWillUnmount() {
    clearTimeout(this.state.activateMenuTimeout);
    clearTimeout(this.state.changeHeaderTimeout);
  }

  changeHeaderStyles = () => {
    clearTimeout(this.state.changeHeaderTimeout);
    this.setState({
      headerClassNames: [
        "header2",
        "headerPicture2",
        "headerTitle2",
        "headerDescription2"
      ]
    });
    this.setState({ initialAnimation: false });
  };

  toggleMenus = menuId => {
    if (this.state.menusAnimatingTimeout || this.state.initialAnimation) {
      return;
    }
    var activeMenu = [];
    for (let i = 0; i < this.state.activeMenu.length; ++i) {
      if (i === menuId) {
        activeMenu.push(true);
      } else {
        activeMenu.push(false);
      }
    }
    var menusAnimatingTimeout = setTimeout(
      () => this.toggleMenusAnimatingTimeout(),
      1500
    );
    this.setState({ activeMenu });
    this.setState({ menusAnimatingTimeout });
  };

  toggleMenusAnimatingTimeout = () => {
    clearTimeout(this.state.menusAnimatingTimeout);
    this.setState({ menusAnimatingTimeout: null });
  };

  render() {
    return (
      <div>
        <div className={this.state.headerClassNames[0]}>
          <img
            src={myPicture}
            alt="myPicture"
            className={this.state.headerClassNames[1]}
          ></img>
          <div className={this.state.headerClassNames[2]}>Neil Solomon</div>
          <div className={this.state.headerClassNames[3]}>
            Software Engineer
          </div>
        </div>
        <div className="menuElements">
          <MenuElement
            name="About Me"
            id={0}
            active={this.state.activeMenu[0]}
            handleClick={this.toggleMenus}
            underscore="__________"
          ></MenuElement>
          <MenuElement
            name="Portfolio"
            id={1}
            active={this.state.activeMenu[1]}
            handleClick={this.toggleMenus}
            underscore="________"
          ></MenuElement>
          <MenuElement
            name="Resume"
            id={2}
            active={this.state.activeMenu[2]}
            handleClick={this.toggleMenus}
            underscore="_______"
          ></MenuElement>
          <MenuElement
            name="Connect"
            id={3}
            active={this.state.activeMenu[3]}
            handleClick={this.toggleMenus}
            underscore="________"
          ></MenuElement>
        </div>
        <MenuView activeMenu={this.state.activeMenu}></MenuView>
      </div>
    );
  }
}

export default MainComponent;
