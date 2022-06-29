import { Component } from 'react';
import { Statistic } from './Statistic/statistic';
import FeedbackOptions from './FeedbackOptions/feedbackOptions';
import { Section } from './Section/section';
import { Notification } from './Notification/notification';
import { GlobalStyle } from './globalStyles';
import { AppWrap } from './App.styled';

export class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  onBtnClick = option => {
    this.setState(prevState => ({
      [option]: prevState[option] + 1,
    }));
  };
  // onNeutralBtnClick = () => {
  //   this.setState(prevState => ({
  //     neutral: prevState.neutral + 1,
  //   }));
  // };
  // onBadBtnClick = () => {
  //   this.setState(prevState => ({
  //     bad: prevState.bad + 1,
  //   }));
  // };
  countTotalFeedback() {
    return this.state.good + this.state.neutral + this.state.bad;
  }

  countPositiveFeedbackPercentage() {
    return Math.round((this.state.good / this.countTotalFeedback()) * 100);
  }

  render() {
    const options = Object.keys(this.state);
    return (
      <AppWrap>
        <GlobalStyle />
        <Section title={'Please Leave Feedback'}>
          <FeedbackOptions
            options={options}
            onLeaveFeedback={this.onBtnClick}
          />
        </Section>
        <Section title={'Statistic'}>
          {this.countTotalFeedback() === 0 ? (
            <Notification message={'There is no feedback'} />
          ) : (
            <Statistic
              good={this.state.good}
              neutral={this.state.neutral}
              bad={this.state.bad}
              total={this.countTotalFeedback()}
              positivePercentage={this.countPositiveFeedbackPercentage()}
            />
          )}
        </Section>
      </AppWrap>
    );
  }
}
