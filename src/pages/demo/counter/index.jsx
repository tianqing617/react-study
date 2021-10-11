import React, { Component } from 'react'
import { InputNumber, Button } from 'antd'
import { createIncrementAction, createDecrementAction, createIncrementAsyncAction } from './redux/counterAction'
import store from './redux/store'
import './index.scss'

// redux 使用示例
export default class Counter extends Component {
  state = { num: 3 };

  saveNum = (value) => {
    this.setState({ num: value });
  }

  increment = () => {
		store.dispatch(createIncrementAction(this.state.num));
    // store.
	}

  decrement = () => {
		store.dispatch(createDecrementAction(this.state.num));
	}
  
  incrementIfOdd = () => {
		const num = this.state.num;
		if(num % 2 !== 0){
			store.dispatch(createIncrementAction(num));
		}
	}

  incrementAsync = () => {
    store.dispatch(createIncrementAsyncAction(this.state.num, 1000));
	}

  componentDidMount() {
    store.subscribe(() => {
      this.setState({});
    });
  }
  render() {
    return (
      <div className="counter">
        <div className="handler">
          <InputNumber className="input-number" min={1} max={10} defaultValue={store.getState()} onChange={this.saveNum} />
          <Button shape="circle" onClick={this.increment}>+</Button>
          <Button shape="circle"  onClick={this.decrement}>-</Button>
          <Button type="primary" onClick={this.incrementIfOdd}>奇数才加</Button>
          <Button type="primary" onClick={this.incrementAsync}>异步加</Button>
        </div>
        <div className="result">
          <span> = </span>
          <span className="num">{store.getState()}</span>
        </div>
      </div>
    )
  }
}
