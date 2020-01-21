import React from "react";
import gsap from "gsap";
import About from "./About.js";
import Portfolio from "./Portfolio.js";
import Connect from "./Connect.js";
import Resume from "./Resume.js";

class MenuView extends React.Component {
  state = {
    className: "menuViewBlank",
    activeMenu: [false, false, false, false],
    transitionOutMenuView: false,
    setActiveMenuTimeout: null
  };

  componentDidUpdate(prevProps) {
    if (prevProps.activeMenu !== this.props.activeMenu) {
      var className,
        activeMenuId,
        timeout = 250,
        tl = gsap.timeline({ defaults: { ease: "sine" } });
      if (this.props.activeMenu[0]) {
        tl.to(".menuViewContainer", {
          duration: 1.25,
          boxShadow: "0px 0px 10px rgb(0, 150, 136, 0.75)",
          width: "50vw",
          height: "300px",
          marginLeft: "25vw",
          marginRight: "25vw"
        }).to(".menuViewContainer", {
          duration: 0.75,
          boxShadow: "0px 0px 10px rgb(0, 0, 0, 0.25)"
        });
        gsap.to(".backgroundAnimations", { duration: 2, height: "700px" });
        gsap.to(".footer", { duration: 2, top: "650px" });
        activeMenuId = 0;
      } else if (this.props.activeMenu[1]) {
        tl.to(".menuViewContainer", {
          duration: 1.25,
          boxShadow: "0px 0px 10px rgb(0, 150, 136, 0.75)",
          width: "90vw",
          height: "900px",
          marginLeft: "5vw",
          marginRight: "5vw"
        }).to(".menuViewContainer", {
          duration: 0.75,
          boxShadow: "0px 0px 10px rgb(0, 0, 0, 0.25)"
        });
        gsap.to(".backgroundAnimations", { duration: 2, height: "1100px" });
        gsap.to(".footer", { duration: 2, top: "1050px" });
        activeMenuId = 1;
      } else if (this.props.activeMenu[2]) {
        activeMenuId = 2;
      } else {
        activeMenuId = 3;
      }

      // if (
      //   !prevProps.activeMenu[0] &&
      //   !prevProps.activeMenu[1] &&
      //   !prevProps.activeMenu[2] &&
      //   !prevProps.activeMenu[3]
      // ) {
      //   className = "menuViewBlankToAbout";
      //   activeMenuId = 0;
      //   timeout = 500;
      // } else if (prevProps.activeMenu[0] && this.props.activeMenu[1]) {
      //   className = "menuViewAboutToPortfolio";
      //   activeMenuId = 1;
      // } else if (prevProps.activeMenu[1] && this.props.activeMenu[0]) {
      //   className = "menuViewPortfolioToAbout";
      //   activeMenuId = 0;
      // } else if (prevProps.activeMenu[0] && this.props.activeMenu[2]) {
      //   className = "menuViewAboutToResume";
      //   activeMenuId = 2;
      // } else if (prevProps.activeMenu[2] && this.props.activeMenu[0]) {
      //   className = "menuViewResumeToAbout";
      //   activeMenuId = 0;
      // } else if (prevProps.activeMenu[0] && this.props.activeMenu[3]) {
      //   className = "menuViewAboutToConnect";
      //   activeMenuId = 3;
      // } else if (prevProps.activeMenu[3] && this.props.activeMenu[0]) {
      //   className = "menuViewConnectToAbout";
      //   activeMenuId = 0;
      // } else if (prevProps.activeMenu[1] && this.props.activeMenu[2]) {
      //   className = "menuViewPortfolioToResume";
      //   activeMenuId = 2;
      // } else if (prevProps.activeMenu[2] && this.props.activeMenu[1]) {
      //   className = "menuViewResumeToPortfolio";
      //   activeMenuId = 1;
      // } else if (prevProps.activeMenu[1] && this.props.activeMenu[3]) {
      //   className = "menuViewPortfolioToConnect";
      //   activeMenuId = 3;
      // } else if (prevProps.activeMenu[3] && this.props.activeMenu[1]) {
      //   className = "menuViewConnectToPortfolio";
      //   activeMenuId = 1;
      // } else if (prevProps.activeMenu[2] && this.props.activeMenu[3]) {
      //   className = "menuViewResumeToConnect";
      //   activeMenuId = 3;
      // } else if (prevProps.activeMenu[3] && this.props.activeMenu[2]) {
      //   className = "menuViewConnectToResume";
      //   activeMenuId = 2;
      // }
      var setActiveMenuTimeout = setTimeout(
        () => this.setActiveMenu(activeMenuId),
        timeout
      );
      this.setState({ setActiveMenuTimeout });
      // this.setState({ className });
      this.setState({ transitionOutMenuView: true });
    }
  }

  setActiveMenu = activeMenuId => {
    var activeMenu = [...this.state.activeMenu];
    for (let i = 0; i < activeMenu.length; ++i) {
      if (i === activeMenuId) {
        activeMenu[i] = true;
      } else {
        activeMenu[i] = false;
      }
    }
    clearTimeout(this.state.setActiveMenuTimeout);
    this.setState({ transitionOutMenuView: false });
    this.setState({ activeMenu });
  };

  render() {
    var menuView;
    if (this.state.activeMenu[0]) {
      menuView = (
        <About
          windowIsLandscape={this.props.windowIsLandscape}
          transitionOut={this.state.transitionOutMenuView}
        ></About>
      );
    } else if (this.state.activeMenu[1]) {
      menuView = (
        <Portfolio
          windowIsLandscape={this.props.windowIsLandscape}
          transitionOut={this.state.transitionOutMenuView}
        ></Portfolio>
      );
    } else if (this.state.activeMenu[2]) {
      menuView = (
        <Resume
          windowIsLandscape={this.props.windowIsLandscape}
          transitionOut={this.state.transitionOutMenuView}
        ></Resume>
      );
    } else if (this.state.activeMenu[3]) {
      menuView = (
        <Connect
          windowIsLandscape={this.props.windowIsLandscape}
          transitionOut={this.state.transitionOutMenuView}
        ></Connect>
      );
    }

    return (
      <div
        style={{ backgroundColor: "white" }}
        //className={this.state.className}
        className="menuViewContainer"
      >
        {menuView}
      </div>
    );
  }
}

export default MenuView;
