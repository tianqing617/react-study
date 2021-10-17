import React, { Component } from 'react'
import { Provider } from 'react-redux'
import store from './redux/store'
import Counter from './counter'
import './index.scss'

// react-redux 生产环境用法
export default class CounterPerson extends Component {
  render() {
    return (
      <div className="counter-person">
        <h3>react-redux 生产环境用法</h3>
        {/* 给容器组件传递 store */}
        <Provider store={store}>
          <Counter />
        </Provider>
      </div>
    )
  }
}
