import React, { Component } from "react";
import PropTypes from "prop-types";

import FeedbackOptions from "./components/FeedbackOptions";
import Statistics from "./components/Statistics";
import Section from "./components/Section";
import Notification from "./components/Notification";
import "./App.css";

class App extends Component {
  static defaultProps = {
    totalFeedback: 0,
    percentageOfGoodFeedb: 0,
  };

  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  countTotalFeedback = () => {
    const totalFeedback = this.state.good + this.state.neutral + this.state.bad;
    return totalFeedback;
  };

  countPositiveFeedbackPercentage = () => {
    const { good, neutral, bad } = this.state;
    const percentageOfGoodFeedb = Math.ceil(
      (good / (good + neutral + bad)) * 100
    );
    return percentageOfGoodFeedb || 0;
  };

  handleGoodBtn = () => {
    this.setState((prevState) => {
      return {
        good: prevState.good + 1,
      };
    });
    this.countTotalFeedback();
    this.countPositiveFeedbackPercentage();
  };

  handleNeutralBtn = () => {
    this.setState((prevState) => {
      return {
        neutral: prevState.neutral + 1,
      };
    });
    this.countTotalFeedback();
  };

  handleBadBtn = () => {
    this.setState((prevState) => {
      return {
        bad: prevState.bad + 1,
      };
    });
    this.countTotalFeedback();
  };

  render(totalFeedback) {
    return (
      <div className="App">
        <header className="App-header">
          <h1>Please leave feedback</h1>
        </header>

        <Section title="">
          <FeedbackOptions
            onHandleGoodBtn={this.handleGoodBtn}
            onHandleNeutralBtn={this.handleNeutralBtn}
            onHandleBadBtn={this.handleBadBtn}
          />
        </Section>
        {totalFeedback !== 0 ? (
          <Section title="Statistics">
            <Statistics
              Good={this.state.good}
              Neutral={this.state.neutral}
              Bad={this.state.bad}
              Total={this.countTotalFeedback()}
              Positive={this.countPositiveFeedbackPercentage}
            />
          </Section>
        ) : (
          <Notification message="No feedback yet" />
        )}
      </div>
    );
  }
}

export default App;
