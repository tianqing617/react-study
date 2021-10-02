import React, { Component } from 'react'

export default class Info extends Component {
  // 组件挂载完毕的钩子
  componentDidMount() {
    console.log('info---componentDidMount');
  }

  // 组件更新完毕的钩子
  componentDidUpdate() {
    console.log('info---componentDidUpdate');
  }

  // 组件将要卸载的钩子
  componentWillUnmount() {
    console.log('info---componentWillUnmount');
  }

  // ------------------------------------------
  // 控制组件更新的“阀门”
  shouldComponentUpdate() {
    console.log('info---shouldComponentUpdate');
    return true;
  }

  render() {
    return (
      <div>
        <span>汽车品牌：{ this.props.car || '无' }</span>
      </div>
    )
  }
}
