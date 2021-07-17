import React, { Component } from 'react';
import FeedbackOptions from './FeedbackOptions'
import Statistics from './Statistics'
import  './Counter.css';

class Counter extends Component  {

    state = {
    good: 0,
    neutral: 0,
    bad: 0,
    total:0,
    
    
    };

    countTotalFeedback = () => {
        const totalFeedback = this.state.good + this.state.neutral + this.state.bad;
        return totalFeedback;
    };

    countPositiveFeedbackPercentage = () => {
        const positiveFeedback = (this.state.good /this.countTotalFeedback())*100;
        return Math.ceil(positiveFeedback ||0 );
    }

    handleGoodBtn = () => {
        this.setState(prevState => {
            return {
                good: prevState.good + 1,
            };
        });
        this.countTotalFeedback();
        this.countPositiveFeedbackPercentage();
    };

    handleNeutralBtn = () => {
        this.setState(prevState => {
            return {
                neutral: prevState.neutral + 1,
            };
        });
        this.countTotalFeedback();
    };

    handleBadBtn = () => {
        this.setState(prevState => {
            return {
                bad: prevState.bad + 1,
            };
        });
        this.countTotalFeedback();
    };


    render() {
        return (
            <div className="StatCounter">
                 <FeedbackOptions  
                    onHandleGoodBtn={this.handleGoodBtn}
                    onHandleNeutralBtn={this.handleNeutralBtn}
                    onHandleBadBtn = {this.handleBadBtn}
                />
                < Statistics
                    Good={ this.state.good}
                    Neutral={this.state.neutral }
                    Bad={this.state.bad}
                    Total={ this.countTotalFeedback}
                    Positive={this.countPositiveFeedbackPercentage} />

            </div>
        );
    };
}

export default Counter;