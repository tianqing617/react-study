import React, { Component } from 'react'
import store from './reactRedux/store'
import Container from './container'
import './index.scss'

// react-redux 基础使用示例
export default class Counter2 extends Component {
  render() {
    return (
      <div className="counter2">
        <h3>react-redux 基础使用示例</h3>
        {/* 给容器组件传递 store */}
        <Container store={store} />
      </div>
    )
  }
}
