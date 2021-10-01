import React, { Component } from 'react'
import './index.scss'

// state 用法
export default class Weather extends Component {
  // 初始化状态
  state = { isHot: false, wind: 'breeze' }

  render() {
    const { isHot, wind } = this.state;
    return (
      <div className="weather">
        <span className="title">今天的天气：</span>
        <span>{ wind }，</span>
        <span className="result">{ isHot ? 'hot' : 'cold' }</span>

        <br/>
        <button onClick={ this.changeWeather }>切 换</button>
      </div>
    )
  }

  // 自定义方法。箭头函数主要是为了 this 指向
  changeWeather = () => {
    const isHot = this.state.isHot;
    this.setState({ isHot: !isHot });
  }
}
