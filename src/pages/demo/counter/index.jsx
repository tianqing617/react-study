import React, { Component } from 'react'
import { InputNumber, Button } from 'antd'
import './index.scss'

export default class Counter extends Component {
  state = { num: 3 };

  saveNum = (value) => {
    this.setState({ num: value });
  }

  render() {
    return (
      <div className="counter">
        <div className="handler">
          <InputNumber className="input-number" min={1} max={10} defaultValue={this.state.num} onChange={this.saveNum} />
          <Button shape="circle" >+</Button>
          <Button shape="circle" >-</Button>
          <Button type="primary">奇数才加</Button>
          <Button type="primary">异步加</Button>
        </div>
        <div className="result">
          <span>=</span>
          <span className="num">123</span>
        </div>
      </div>
    )
  }
}
