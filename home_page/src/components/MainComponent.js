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
    menusAnimatingTimeout: null,
    initialAnimation: true,
    windowIsLandscape: true,
    headerClassNames: [
      "header1",
      "headerPicture1",
      "headerTitle1",
      "headerDescription1",
      "headerSpanTitle1",
      "headerSpanDescription1"
    ]
  };

  componentDidMount() {
    var activateMenuTimeout = setTimeout(() => this.toggleMenus(0), 2500);
    var changeHeaderTimeout = setTimeout(() => this.changeHeaderStyles(), 2400);
    window.addEventListener("resize", this.windowResize);
    this.setState({
      windowIsLandscape: window.innerWidth > window.innerHeight
    });
    this.setState({ activateMenuTimeout });
    this.setState({ changeHeaderTimeout });
  }

  componentWillUnmount() {
    window.removeEventListener("resize", this.windowResize);
    clearTimeout(this.state.activateMenuTimeout);
    clearTimeout(this.state.changeHeaderTimeout);
  }

  windowResize = () => {
    this.setState({
      windowIsLandscape: window.innerWidth > window.innerHeight
    });
  };

  changeHeaderStyles = () => {
    clearTimeout(this.state.changeHeaderTimeout);
    this.setState({
      headerClassNames: [
        "header2",
        "headerPicture2",
        "headerTitle2",
        "headerDescription2",
        "headerSpanTitle2",
        "headerSpanDescription2"
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
    var title, description, footer;
    if (!this.state.initialAnimation) {
      title = (
        <div className={this.state.headerClassNames[4]}>Neil Solomon</div>
      );
      description = (
        <div className={this.state.headerClassNames[5]}>Software Engineer</div>
      );
      // footer = <div className="footer">&copy;2019 Neil Solomon</div>;
    }
    return (
      <div>
        <div style={{ zIndex: 1, position: "relative" }}>
          <div style={{ backgroundColor: "white" }}>
            <div className={this.state.headerClassNames[0]}>
              {title}
              <img
                src={myPicture}
                alt="myPicture"
                className={this.state.headerClassNames[1]}
              ></img>
              {description}
              <div className={this.state.headerClassNames[2]}>Neil Solomon</div>
              <div className={this.state.headerClassNames[3]}>
                Software Engineer
              </div>
            </div>
          </div>
          <div className="menuElements">
            <MenuElement
              name="About Me"
              id={0}
              active={this.state.activeMenu[0]}
              handleClick={this.toggleMenus}
              windowIsLandscape={this.state.windowIsLandscape}
            ></MenuElement>
            <MenuElement
              name="Portfolio"
              id={1}
              active={this.state.activeMenu[1]}
              handleClick={this.toggleMenus}
              windowIsLandscape={this.state.windowIsLandscape}
            ></MenuElement>
            <MenuElement
              name="Resume"
              id={2}
              active={this.state.activeMenu[2]}
              handleClick={this.toggleMenus}
              windowIsLandscape={this.state.windowIsLandscape}
            ></MenuElement>
            <MenuElement
              name="Connect"
              id={3}
              active={this.state.activeMenu[3]}
              handleClick={this.toggleMenus}
              windowIsLandscape={this.state.windowIsLandscape}
            ></MenuElement>
          </div>
          <MenuView
            windowIsLandscape={this.state.windowIsLandscape}
            activeMenu={this.state.activeMenu}
          ></MenuView>
          {footer}
        </div>
        <div className="backgroundAnimations">
          <div className="backgroundAnimation1"></div>
          <div className="backgroundAnimation2"></div>
          <div className="backgroundAnimation3"></div>
          <div className="backgroundAnimation4"></div>
          <div className="backgroundAnimation5"></div>
          <div className="backgroundAnimation6"></div>
          <div className="backgroundAnimation7"></div>
          <div className="backgroundAnimation8"></div>
        </div>
      </div>
    );
  }
}

export default MainComponent;
