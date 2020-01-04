import React from "react";
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
      var className, activeMenuId;
      if (
        !prevProps.activeMenu[0] &&
        !prevProps.activeMenu[1] &&
        !prevProps.activeMenu[2] &&
        !prevProps.activeMenu[3]
      ) {
        className = "menuViewBlankToAbout";
        activeMenuId = 0;
      } else if (prevProps.activeMenu[0] && this.props.activeMenu[1]) {
        className = "menuViewAboutToPortfolio";
        activeMenuId = 1;
      } else if (prevProps.activeMenu[1] && this.props.activeMenu[0]) {
        className = "menuViewPortfolioToAbout";
        activeMenuId = 0;
      } else if (prevProps.activeMenu[0] && this.props.activeMenu[2]) {
        className = "menuViewAboutToResume";
        activeMenuId = 2;
      } else if (prevProps.activeMenu[2] && this.props.activeMenu[0]) {
        className = "menuViewResumeToAbout";
        activeMenuId = 0;
      } else if (prevProps.activeMenu[0] && this.props.activeMenu[3]) {
        className = "menuViewAboutToConnect";
        activeMenuId = 3;
      } else if (prevProps.activeMenu[3] && this.props.activeMenu[0]) {
        className = "menuViewConnectToAbout";
        activeMenuId = 0;
      } else if (prevProps.activeMenu[1] && this.props.activeMenu[2]) {
        className = "menuViewPortfolioToResume";
        activeMenuId = 2;
      } else if (prevProps.activeMenu[2] && this.props.activeMenu[1]) {
        className = "menuViewResumeToPortfolio";
        activeMenuId = 1;
      } else if (prevProps.activeMenu[1] && this.props.activeMenu[3]) {
        className = "menuViewPortfolioToConnect";
        activeMenuId = 3;
      } else if (prevProps.activeMenu[3] && this.props.activeMenu[1]) {
        className = "menuViewConnectToPortfolio";
        activeMenuId = 1;
      } else if (prevProps.activeMenu[2] && this.props.activeMenu[3]) {
        className = "menuViewResumeToConnect";
        activeMenuId = 3;
      } else if (prevProps.activeMenu[3] && this.props.activeMenu[2]) {
        className = "menuViewConnectToResume";
        activeMenuId = 2;
      }
      var setActiveMenuTimeout = setTimeout(
        () => this.setActiveMenu(activeMenuId),
        250
      );
      this.setState({ setActiveMenuTimeout });
      this.setState({ className });
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
        <About transitionOut={this.state.transitionOutMenuView}></About>
      );
    } else if (this.state.activeMenu[1]) {
      menuView = (
        <Portfolio transitionOut={this.state.transitionOutMenuView}></Portfolio>
      );
    } else if (this.state.activeMenu[2]) {
      menuView = (
        <Resume transitionOut={this.state.transitionOutMenuView}></Resume>
      );
    } else if (this.state.activeMenu[3]) {
      menuView = (
        <Connect transitionOut={this.state.transitionOutMenuView}></Connect>
      );
    }

    return <div className={this.state.className}>{menuView}</div>;
  }
}

export default MenuView;
