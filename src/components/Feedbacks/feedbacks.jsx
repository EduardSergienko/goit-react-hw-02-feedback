import { Component } from 'react';

export class Feedbacks extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  onGoodBtnClick = () => {
    this.setState(prevState => ({
      good: prevState.good + 1,
    }));
  };
  onNeutralBtnClick = () => {
    this.setState(prevState => ({
      neutral: prevState.neutral + 1,
    }));
  };
  onBadBtnClick = () => {
    this.setState(prevState => ({
      bad: prevState.bad + 1,
    }));
  };

  render() {
    return (
      <section>
        <h1>Please Leave Feedback</h1>
        <div>
          <button type="button" onClick={this.onGoodBtnClick}>
            Good
          </button>
          <button type="button" onClick={this.onNeutralBtnClick}>
            Neutral
          </button>
          <button type="button" onClick={this.onBadBtnClick}>
            Bad
          </button>
        </div>
        <div>
          <h2>Statistic</h2>
          <div>
            <p>Good: {this.state.good}</p>
            <p>Neutral: {this.state.neutral}</p>
            <p>Bad: {this.state.bad}</p>
            <p>Total:{this.state.good + this.state.neutral + this.state.bad}</p>
            <p>
              Positive feedbacks:
              {Math.round(
                (this.state.good /
                  (this.state.good + this.state.neutral + this.state.bad)) *
                  100
              )}
              %
            </p>
          </div>
        </div>
      </section>
    );
  }
}
