import React, { Component } from 'react'
import Info from './info';

// props 用法
export default class Person extends Component {
  // 初始化学生信息
  state = {
    stu1: { name: 'Lucy', age: 23, sex: 'M' },
    stu2: { name: 'Tom' }
  }

  render() {
    // 三种不同的渲染方式
    return (
      <div>
        <Info name="Jim" age={ 18 } sex="F"></Info>
        <hr />
        <Info { ...this.state.stu1 }></Info>
        <hr />
        <Info { ...this.state.stu2 }></Info>
      </div>
    )
  }
}
