import React, { Component } from 'react'
import { InputNumber, Button } from 'antd'
// import { createIncrementAction, createDecrementAction, createIncrementAsyncAction } from './reactRedux/counterAction'
// import store from './reactRedux/store'
import './index.scss'

export default class Counter extends Component {
  state = { num: 1 };

  saveNum = (value) => {
    this.setState({ num: value });
  }

  increment = () => {
    this.props.increment(this.state.num);
	}

  decrement = () => {
    this.props.decrement(this.state.num);
	}
  
  incrementIfOdd = () => {
    const sum = this.props.sum;
		if(sum % 2 !== 0){
			 this.props.increment(this.state.num);
		}
	}

  incrementAsync = () => {
    this.props.incrementAsync(this.state.num, 1000);
	}

  componentDidMount() {
    console.log('mount', this.props)
  }

  render() {
    return (
      <div className="counter3">
        <div className="handler">
          <InputNumber className="input-number" min={1} max={10} defaultValue={this.state.num} onChange={this.saveNum} />
          <Button shape="circle" onClick={this.increment}>+</Button>
          <Button shape="circle"  onClick={this.decrement}>-</Button>
          <Button type="primary" onClick={this.incrementIfOdd}>奇数才加</Button>
          <Button type="primary" onClick={this.incrementAsync}>异步加</Button>
        </div>

        <div className="result">
          <span> = </span>
          <span className="num">{this.props.sum}</span>
        </div>
      </div>
    )
  }
}
