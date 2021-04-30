import React from 'react';

export class Clock extends React.Component {
  constructor(props) {
    super(props);
    this.state = { date: new Date() };
  }

  startInterval() {
    let delay;
    if(this.props.isPrecise){
      delay = 100;
    } else {
      delay = 1000;
    }
    this.intervalID = setInterval(() => {
      this.setState({ date: new Date() });
    }, delay);
  }

  render() {
    return (
      <div>
        {this.props.isPrecise
          ? this.state.date.toISOString()
          : this.state.date.toLocaleTimeString()}
      </div>
    );
  }
  componentDidMount() {
    this.startInterval();
  }
  componentWillUnmount() {
    clearInterval(this.intervalID);
  }
  componentDidUpdate(prevProps) {
    if(this.props.isPrecise === prevProps.isPrecise) {
      return;
    }
    clearInterval(this.intervalID);
    this.startInterval();
  }
}

/*We’ve come to the end of the lesson. We’ve learned about the three major phases of a component’s lifecycle:

Mounting, when the component is being initialized and put into the DOM for the first time. We saw that the constructor, render(), and componentDidMount() are called during this phase.
Updating, when the component updates as a result of changed state or changed props. We saw that render() and componentDidUpdate() are called during this phase.
Unmounting, when the component is being removed from the DOM. We saw that componentWillUnmount() was called here, which was a good time to clean things up.
We also learned about setting up side-effects and tearing them down. We now know how to make more robust, complex components!*/ 