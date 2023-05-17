import React, { Component } from 'react';
import Statistics from './components/Statistics';
import style from './App.module.css';
import { FeedbackOptions } from './components/FeedbackOptions';
import Section from './components/Section';
import { Notification } from './components/Notification';

class App extends Component {

  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  countFeedback = (evt) => {
    const valueKey = evt.target.textContent;
    console.log(valueKey);

    this.setState(state => ({
      ...state,
      [valueKey]: state[valueKey] + 1,
    }));
  };

  countTotalFeedback = () => {
    const sumValue = Object.values(this.state)
    return sumValue.reduce(
      (accumulator, currentValue) => {
        accumulator += currentValue;
        return accumulator;
      });
   }

  countPositiveFeedbackPercentage = () => {
    const { good, neutral, bad } = this.state;
    return Math.round((good * 100) / (good + neutral + bad));
  };

  render() {
    return (
      <div className={style.control}>
        <Section title="Please leave feedback" >
          <FeedbackOptions
            options={this.state}
            onLeaveFeedback={this.countFeedback} />
        </Section>
        {this.countTotalFeedback() === 0 ? (
          <Notification message="No feedback given" />
          ) : (
            <Section title="Statistics" >
              <Statistics
            stat={this.state}
            total={this.countTotalFeedback()}
            percentage={this.countPositiveFeedbackPercentage()}
              />
            </Section> )
        }
      </div>
    );
  }
}

export default App;
