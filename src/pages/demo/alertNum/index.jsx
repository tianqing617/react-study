import React, { Component } from 'react'
import './index.scss'

// refs 基础用法
export default class AlertNum extends Component {
  state = { num1: '', num2: '' };

  showData1 = () => {
    this.setState({ num1: this.refs.input1.value })
  }

  showData2 = () => {
    this.setState({ num2: this.input2.value });
  }

  myRef = React.createRef();
  showData3 = () => {
    this.setState({ num3: this.myRef.current.value });
  }

  showData4 = (event) => {
    this.setState({ num4: event.target.value })
  }

  render() {
    return (
      <ul className="alert-num">
        <li>
          {/* 方式一：已弃用 */}
          <input ref="input1" type="text" />
          <button onClick={ this.showData1 }>展示num1数据</button>
        </li>
        <li>
          {/* 方式二：回调函数 */}
          <input ref={ c => this.input2 = c } type="text" />
          <button onClick={ this.showData2 }>展示num2数据</button>
        </li>
        <li>
          {/* 方式三：创建容器 */}
          <input ref={ this.myRef } type="text" />
          <button onClick={ this.showData3 }>展示num3数据</button>
        </li>
        <li>
          {/* 注意：要有限制的使用refs */}
          <input type="text" onBlur={ this.showData4 } />
        </li>

        <li>
          <span className="result">num1 结果：{this.state.num1}</span>
          <br />
          <span className="result">num2 结果：{this.state.num2}</span>
          <br />
          <span className="result">num3 结果：{this.state.num3}</span>
          <br />
          <span className="result">num4 结果：{this.state.num4}</span>
        </li>
      </ul>
    )
  }
}
