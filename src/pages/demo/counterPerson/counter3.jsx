import React, { Component } from 'react'
import { connect } from 'react-redux'
import { InputNumber, Button } from 'antd'
import { createIncrementAction, createDecrementAction, createIncrementAsyncAction } from './redux/action'

class Counter3 extends Component {
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
    this.props.incrementAsync(this.state.num, 600);
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

// 简写形式，详细写法见：counter2组件
export default connect(
  state => ({ sum: state }),
  {
    increment: createIncrementAction,
    decrement: createDecrementAction,
    incrementAsync: createIncrementAsyncAction
  }
)(Counter3);
