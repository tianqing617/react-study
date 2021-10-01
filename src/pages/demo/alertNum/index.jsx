import React, { Component } from 'react'
import './index.scss'

// refs 基础用法
export default class AlertNum extends Component {
  state = { num1: '', num2: '' };

  showData1 = () => {
    this.setState({ num1: this.refs.input1.value })
  }

  render() {
    return (
      <ul className="alert-num">
        <li>
          <input ref="input1" type="text" />
          <button onClick={ this.showData1 }>展示数据</button>
        </li>
        <li>
          <input ref="input2" type="text" />
        </li>
        <li>
          <span className="result">num1 结果：{this.state.num1}</span>
          <br />
          <span className="result">num2 结果：{this.state.num2}</span>
        </li>
      </ul>
    )
  }
}
