import React, { Component } from 'react'
import Info from './info'

// 生命周期
export default class ChangeCar extends Component {
  state = { car: 'Audi' }

  change = () => {
    if (this.state.car === 'Audi') {
      this.setState({ car: 'BMW' })
    } else {
      this.setState({ car: 'Audi' })
    }
  }

  // 使用static，会加入到对象的原型上，而非对象实例上。
  static getDerivedStateFromProps(props,state) {
    console.log('getDerivedStateFromProps', props, state);
    return null
  }

  // 组件挂载完毕的钩子
  componentDidMount() {
    console.log('index---componentDidMount');
  }

  // 组件更新完毕的钩子
  componentDidUpdate() {
    console.log('index---componentDidUpdate', this.state.car);
  }

  // 组件将要卸载的钩子
  componentWillUnmount() {
    console.log('index---componentWillUnmount');
  }

  // -------------------------------
  //强制更新按钮的回调
  force = ()=>{
    this.forceUpdate()
  }

  //卸载组件按钮的回调
  death = ()=>{
    // ReactDOM.unmountComponentAtNode(document.getElementById('test'))
    // this.unmountComponentAtNode();
  }

  render() {
    return (
      <div>
        <Info car={ this.state.car }></Info>
        <br />
        <button onClick={this.change }>change my car</button>&nbsp;
        <button onClick={this.force}>destroy info</button>
      </div>
    )
  }
}
