import React, { Component } from "react";

export default class CountDownClock extends Component {
  constructor(props) {
    super(props);

    this.state = {
      date:new Date(),
      hr: new Date().getHours(),
      min: new Date().getMinutes(),
      sec: new Date().getSeconds(),
      // hr:0,
      // min:1,
      // sec:4

    };
  }

  tick = () => {
      this.setState({
        sec:this.state.sec-1,
      })
      if(this.state.sec<1){
        this.setState({
            min:this.state.min-1,
            sec:this.state.sec+59
          })  
      }
      if(this.state.min<1){
        this.setState({
            hr:this.state.hr-1,
            min:this.state.min+59,
            sec:this.state.sec+59
          })  
      }
      if(this.state.min===0 ){
        this.setState({
          hr:23,
          min:59,
          sec:59
        })
        // clearInterval(this.timer)
      }

  }
  

clickhere=()=>{
    this.timer = setInterval(
        this.tick
    , 1000);
}

render() {
    return <>
        <div>{this.state.hr}:{this.state.min}:{this.state.sec}</div>
        <button onClick={this.clickhere}>Start</button>
    </>
  }
}
