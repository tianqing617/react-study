import React, { Component } from 'react'
import './index.scss'

export default class Weather extends Component {
  render() {
    return (
      <div className="weather">
        <span className="title">今天的天气：</span>
        <span className="result">很热</span>
        <button>切换</button>
      </div>
    )
  }
}
