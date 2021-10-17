import React, { Component } from 'react'
import { Provider } from 'react-redux'
import { Divider } from 'antd';
import store from './redux/store'
import Counter from './counter'
import Person from './person'
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
          <Divider />
          <Person />
        </Provider>
      </div>
    )
  }
}
