import React, { Component } from 'react'

export default class CounterIncerementDecrement extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
       tik_tik_value:0
    }
  }

  Increment = () => {
      this.setState({
          tik_tik_value:this.state.tik_tik_value+1
      })
  }
  Decrement = () => {
      this.setState({
          tik_tik_value:this.state.tik_tik_value-1
      })
  }
  Reset = () => {
      this.setState({
          tik_tik_value:0
      })
  }

render() {
  return (
    <div>
        <h3>{this.state.tik_tik_value}</h3>
        <button onClick={this.Decrement}>Decrease</button>
        <button onClick={this.Reset}>Reset</button>
        <button onClick={this.Increment}>Increase</button>
    </div>
  )
}
}
