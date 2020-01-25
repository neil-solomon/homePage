import React from "react";
import gsap from "gsap";
import About from "./About.js";
import Portfolio from "./Portfolio.js";
import Connect from "./Connect.js";
import Resume from "./Resume.js";

import Scoreboard from "./images/scoreboard.jpg";
import TicTacGrow from "./images/ticTacGrow.jpg";
import RiskDiceRoller from "./images/riskDiceRoller.jpg";
import VirtualBank from "./images/virtualBank.jpg";

class MenuView extends React.Component {
  state = {
    className: "menuViewBlank",
    activeMenu: [false, false, false, false],
    setActiveMenuTimeout: null
  };

  componentWillUnmount() {
    clearTimeout(this.state.setActiveMenuTimeout);
  }

  componentDidUpdate(prevProps) {
    if (prevProps.activeMenu !== this.props.activeMenu) {
      var activeMenuId,
        timeline1 = gsap.timeline({ defaults: { ease: "sine" } }),
        timeline2 = gsap.timeline({ defaults: { ease: "sine" } });
      var aboutWidth,
        aboutHeight,
        aboutLeft,
        aboutRight,
        portfolioWidth,
        portfolioHeight,
        portfolioLeft,
        portfolioRight,
        resumeWidth,
        resumeHeight,
        resumeLeft,
        resumeRight,
        connectWidth,
        connectHeight,
        connectLeft,
        connectRight,
        backgroundAnimationsHeight,
        footerHeight;
      if (this.props.windowIsLandscape) {
        aboutWidth = "50vw";
        aboutHeight = "300px";
        aboutLeft = "25vw";
        aboutRight = "25vw";
        portfolioWidth = "90vw";
        portfolioHeight = "900px";
        portfolioLeft = "5vw";
        portfolioRight = "5vw";
        resumeWidth = "60vw";
        resumeHeight = "1600px";
        resumeLeft = "20vw";
        resumeRight = "20vw";
        connectWidth = "40vw";
        connectHeight = "225px";
        connectLeft = "30vw";
        connectRight = "30vw";
      } else {
        aboutWidth = "80vw";
        aboutHeight = "350px";
        aboutLeft = "10vw";
        aboutRight = "10vw";
        portfolioWidth = "95vw";
        portfolioHeight = "1600px";
        portfolioLeft = "2.5vw";
        portfolioRight = "2.5vw";
        resumeWidth = "85vw";
        resumeHeight = "1600px";
        resumeLeft = "7.5vw";
        resumeRight = "7.5vw";
        connectWidth = "70vw";
        connectHeight = "225px";
        connectLeft = "15vw";
        connectRight = "15vw";
      }
      if (this.props.activeMenu[0]) {
        backgroundAnimationsHeight = "100vh";
        footerHeight = "95vh";
        timeline1
          .to(".menuViewContainer", {
            duration: 0.5,
            boxShadow: "0px 0px 10px rgb(0, 150, 136, 0.75)"
          })
          .to(".menuViewContainer", {
            duration: 0.5,
            width: aboutWidth,
            height: aboutHeight,
            marginLeft: aboutLeft,
            marginRight: aboutRight
          })
          .to(".menuViewContainer", {
            duration: 0.5,
            boxShadow: "0px 0px 10px rgb(0, 0, 0, 0.25)"
          });
        timeline2
          .to(".menuContent", { duration: 0.5, opacity: 0 })
          .to(".menuContent", { duration: 0.5, opacity: 1 }, "+=.5");
        gsap.to(".backgroundAnimations", {
          duration: 1.5,
          height: backgroundAnimationsHeight
        });
        gsap.to(".footer", { duration: 1.5, top: footerHeight });
        activeMenuId = 0;
      } else if (this.props.activeMenu[1]) {
        if (this.props.windowIsLandscape) {
          backgroundAnimationsHeight = "1200px";
          footerHeight = "1150px";
        } else {
          backgroundAnimationsHeight = "1900px";
          footerHeight = "1850px";
        }
        timeline1
          .to(".menuViewContainer", {
            duration: 0.5,
            boxShadow: "0px 0px 10px rgb(0, 150, 136, 0.75)"
          })
          .to(".menuViewContainer", {
            duration: 0.5,
            width: portfolioWidth,
            height: portfolioHeight,
            marginLeft: portfolioLeft,
            marginRight: portfolioRight
          })
          .to(".menuViewContainer", {
            duration: 0.5,
            boxShadow: "0px 0px 10px rgb(0, 0, 0, 0.25)"
          });
        timeline2
          .to(".menuContent", { duration: 0.5, opacity: 0 })
          .to(".menuContent", { duration: 0.5, opacity: 1 }, "+=.5");
        gsap.to(".backgroundAnimations", {
          duration: 1.5,
          height: backgroundAnimationsHeight
        });
        gsap.to(".footer", { duration: 1.5, top: footerHeight });
        activeMenuId = 1;
      } else if (this.props.activeMenu[2]) {
        backgroundAnimationsHeight = "1900px";
        footerHeight = "1850px";
        timeline1
          .to(".menuViewContainer", {
            duration: 0.5,
            boxShadow: "0px 0px 10px rgb(0, 150, 136, 0.75)"
          })
          .to(".menuViewContainer", {
            duration: 0.5,
            width: resumeWidth,
            height: resumeHeight,
            marginLeft: resumeLeft,
            marginRight: resumeRight
          })
          .to(".menuViewContainer", {
            duration: 0.5,
            boxShadow: "0px 0px 10px rgb(0, 0, 0, 0.25)"
          });
        timeline2
          .to(".menuContent", { duration: 0.5, opacity: 0 })
          .to(".menuContent", { duration: 0.5, opacity: 1 }, "+=.5");
        gsap.to(".backgroundAnimations", {
          duration: 1.5,
          height: backgroundAnimationsHeight
        });
        gsap.to(".footer", { duration: 1.5, top: footerHeight });
        activeMenuId = 2;
      } else {
        backgroundAnimationsHeight = "100vh";
        footerHeight = "95vh";
        timeline1
          .to(".menuViewContainer", {
            duration: 0.5,
            boxShadow: "0px 0px 10px rgb(0, 150, 136, 0.75)"
          })
          .to(".menuViewContainer", {
            duration: 0.5,
            width: connectWidth,
            height: connectHeight,
            marginLeft: connectLeft,
            marginRight: connectRight
          })
          .to(".menuViewContainer", {
            duration: 0.5,
            boxShadow: "0px 0px 10px rgb(0, 0, 0, 0.25)"
          });
        timeline2
          .to(".menuContent", { duration: 0.5, opacity: 0 })
          .to(".menuContent", { duration: 0.5, opacity: 1 }, "+=.5");
        gsap.to(".backgroundAnimations", {
          duration: 1.5,
          height: backgroundAnimationsHeight
        });
        gsap.to(".footer", { duration: 1.5, top: footerHeight });
        activeMenuId = 3;
      }
      var setActiveMenuTimeout = setTimeout(
        () => this.setActiveMenu(activeMenuId),
        500
      );
      this.setState({ setActiveMenuTimeout });
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
    this.setState({ activeMenu });
  };

  render() {
    var menuView;
    if (this.state.activeMenu[0]) {
      menuView = (
        <div className="menuContent">
          <About windowIsLandscape={this.props.windowIsLandscape}></About>
        </div>
      );
    } else if (this.state.activeMenu[1]) {
      menuView = (
        <div className="menuContent">
          <Portfolio
            windowIsLandscape={this.props.windowIsLandscape}
            Scoreboard={Scoreboard}
            TicTacGrow={TicTacGrow}
            RiskDiceRoller={RiskDiceRoller}
            VirtualBank={VirtualBank}
          ></Portfolio>
        </div>
      );
    } else if (this.state.activeMenu[2]) {
      menuView = (
        <div className="menuContent">
          <Resume windowIsLandscape={this.props.windowIsLandscape}></Resume>
        </div>
      );
    } else if (this.state.activeMenu[3]) {
      menuView = (
        <div className="menuContent">
          <Connect windowIsLandscape={this.props.windowIsLandscape}></Connect>
        </div>
      );
    }

    return (
      <div
        style={{ backgroundColor: "white", borderRadius: "10px" }}
        className="menuViewContainer"
      >
        {menuView}
      </div>
    );
  }
}

export default MenuView;
