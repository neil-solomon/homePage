import React from "react";
import PortfolioItem from "./PortfolioItem.js";
import Scoreboard from "./images/scoreboard.jpg";
import TicTacGrow from "./images/ticTacGrow.jpg";
import RiskDiceRoller from "./images/riskDiceRoller.jpg";
import VirtualBank from "./images/virtualBank.jpg";

class Portfolio extends React.Component {
  state = {
    animationTimeout: null
  };

  componentDidMount() {
    var animationTimeout = setTimeout(() => this.animationTimeout(), 1000);
    this.setState({ animationTimeout });
  }

  componentWillUnmount() {
    clearTimeout(this.state.animationTimeout);
  }

  animationTimeout = () => {
    clearTimeout(this.state.animationTimeout);
    this.setState({ animationTimeout: null });
  };

  render() {
    if (this.state.animationTimeout != null) {
      return null;
    }
    var className;
    if (this.props.transitionOut) {
      className = "menuContentTransitionOut";
    } else {
      className = "menuContentTransitionIn";
    }

    return (
      <div className={className}>
        <div>
          <PortfolioItem
            name="Tic-Tac-Grow"
            description="Original game Tic-Tac-Grow adds an exciting twist to the
              classic game by randomly adding a new cell to the board 
              after each player takes their turn. Choose how many X's or O's in a
              row it takes to win and how big you want the board to grow."
            image={TicTacGrow}
            link="https://neil-solomon.github.io/score_keeper#/TicTacGrow"
            windowIsLandscape={this.props.windowIsLandscape}
          ></PortfolioItem>
          <PortfolioItem
            name="Scoreboard"
            description="An interactive scoreboard for keeping score during your
              favorite games. Featuring colorful icons for each player and
              a live chart of scoring progression. Turn score-keeping from a
              tedious chore to a fun and exciting part of game night!"
            image={Scoreboard}
            link="https://neil-solomon.github.io/score_keeper#/Scoreboard"
            windowIsLandscape={this.props.windowIsLandscape}
          ></PortfolioItem>
          <PortfolioItem
            name="Risk Dice Roller"
            description="The Risk Dice Roller will save you from rolling dice for hours on end.
              Featuring win probabilites calculated by running 1,000's of simulations,
              a live chart of the state of the armies as the battle progresses,
              and a uniform distribution of dice roll probabilities."
            image={RiskDiceRoller}
            link="https://neil-solomon.github.io/score_keeper#/RiskDiceRoller"
            windowIsLandscape={this.props.windowIsLandscape}
          ></PortfolioItem>
          <PortfolioItem
            name="Virtual Bank"
            description="Use the Virtual Bank to keep track of all of the money for
            all of the players in your game. Whether you have lost your Monopoly money
            or run out of Poker chips, the Virtual Bank makes it so you
            never have to make change or do math again!"
            image={VirtualBank}
            link="https://neil-solomon.github.io/score_keeper#/VirtualBank"
            windowIsLandscape={this.props.windowIsLandscape}
          ></PortfolioItem>
        </div>
      </div>
    );
  }
}

export default Portfolio;
