import React, { Component } from "react";

export default class StopWatch extends Component {
  constructor(props) {
    super(props);
    this.state = {
      hr: 0,
      min: 0,
      sec: 0,
      milisec: 0,
      count: 0,
    };
  }
  start_time = () => {
    this.setState({
      milisec: this.state.milisec + 1,
    });
    if (this.state.milisec > 59) {
      this.setState({
        sec: this.state.sec + 1,
        milisec: 0,
      });
    }
    if (this.state.sec > 59) {
      this.setState({
        min: this.state.min + 1,
        sec: 0,
      });
    }
    if (this.state.min > 59) {
      this.setState({
        hr: this.state.hr + 1,
        min: 0,
      });
    }
  };

  start = () => {
    document.getElementById("start_button").disabled = true;

    this.timer = setInterval(this.start_time, 10);
  };

  reset = () => {
    this.setState({
      hr: 0,
      min: 0,
      sec: 0,
      milisec: 0,
    });
    clearInterval(this.timer);
    document.getElementById("start_button").disabled = false;
  };

  pause = () => {
    document.getElementById("start_button").disabled = false;
    clearInterval(this.timer);
  };

  resume = () => {
    this.timer = setInterval(this.start_time, 10);
  };
  render() {
    return (
      <div>
        <div>
          {this.state.hr}:{this.state.min}:{this.state.sec}:{this.state.milisec}
        </div>
        <button id="start_button" onClick={this.start}>
          Start
        </button>
        <button id="stop_button" onClick={this.pause}>
          Stop
        </button>
        {/* <button id="resume_button" onClick={this.resume}>
          Resume
        </button> */}
        <button id="reset_button" onClick={this.reset}>
          Reset
        </button>
      </div>
    );
  }
}
