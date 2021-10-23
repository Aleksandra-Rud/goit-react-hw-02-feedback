import React, { Component } from "react";
import FeedbackOptions from "./components/FeedbackOptions/FeedbackOptions";
import Section from "./components/Title/Title";
import Statistics from "./components/Statistics/Statistics";
import Notification from "./components/Notification/Notifications";
import "./App.css";

export class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  onLeaveFeedback = (e) => {
    const option = e.target.textContent;
    this.setState((prevState) => ({
      [option]: prevState[option] + 1,
    }));
  };

  countTotalFeedback = () => {
    const total = Object.keys(this.state).reduce(
      (acc, key) => acc + this.state[key],
      0
    );
    return total;
  };

  countPositiveFeedbackPercentage = () => {
    return Math.round((this.state.good / this.countTotalFeedback()) * 100);
  };

  render() {
    const keys = Object.keys(this.state);
    const { good, neutral, bad } = this.state;

    return (
      <Section title="Please leave feedback">
        <FeedbackOptions
          options={keys}
          onLeaveFeedback={this.onLeaveFeedback}
        ></FeedbackOptions>
        {this.countTotalFeedback() ? (
          <Statistics
            title="Statistics"
            good={good}
            neutral={neutral}
            bad={bad}
            total={this.countTotalFeedback()}
            percentage={this.countPositiveFeedbackPercentage()}
          />
        ) : (
          <Notification message="No feedback given" />
        )}
      </Section>
    );
  }
}
export default App;
