import React, { Component } from "react";

export class Counter extends Component {
  constructor() {
    super();
    this.state = {
      count: 0,
      text1: "odd",
      text2: "even",
      text: "",
    };
  }

  Count_handler = () => {
    console.log(this.state.count);
    this.setState({
      count: this.state.count + 1,
    });
    if (this.state.count % 2 === 0) {
      this.setState({
        text: this.state.text1,
      });
    //   console.log(this.text2);
    } else {
      this.setState({
        text: this.state.text2,
      });
    }
  };

  render() {
    return (
      <div>
        <button onClick={this.Count_handler}>
          click {this.state.count} times
        </button>
        <div>{this.state.text}</div>
      </div>
    );
  }
}

export default Counter;
