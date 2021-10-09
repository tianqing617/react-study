import React, { Component } from 'react'
import { InputNumber, Button } from 'antd'
import { createIncrementAction, createDecrementAction } from './redux/counterAction'
import store from './redux/store'
import './index.scss'

export default class Counter extends Component {
  state = { num: 3 };

  saveNum = (value) => {
    this.setState({ num: value });
  }

  increment = () => {
		store.dispatch(createIncrementAction(this.state.num));
    store.
	}
  decrement = () => {
		store.dispatch(createDecrementAction(this.state.num));
	}

  render() {
    return (
      <div className="counter">
        <div className="handler">
          <InputNumber className="input-number" min={1} max={10} defaultValue={store.getState()} onChange={this.saveNum} />
          <Button shape="circle" onClick={this.increment}>+</Button>
          <Button shape="circle" >-</Button>
          <Button type="primary">奇数才加</Button>
          <Button type="primary">异步加</Button>
        </div>
        <div className="result">
          <span>=</span>
          <span className="num">{store.getState()}</span>
        </div>
      </div>
    )
  }
}
