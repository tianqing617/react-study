import React, { Component } from 'react'
import './index.scss'

// slot 功能
export default class Parent extends Component {
  render() {
    return (
      <div className="render-props-parent">
        <h3>Parent</h3>
        <Son render={name => {
          return (
            <GrandSon sonName={name} />
          )
        }} />
      </div>
    )
  }
}

class Son extends Component {
  state = { name: 'jimson' }
  render() {
    console.log('sonProps', this.props, this.state);

    return (
      <div className="render-props-son">
        <h3>Son</h3>
        <span>Parent name is: </span>

        {/* 渲染插槽组件 */}
        {this.props.render(this.state.name)}
      </div>
    )
  }
}

class GrandSon extends Component {
  render() {
    return (
      <div className="render-props-grand-son">
        <h3>Grandson</h3>
        <span>my son name is: <i>{this.props.sonName}</i></span>
      </div>
    )
  }
}