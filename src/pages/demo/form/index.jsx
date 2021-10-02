import React, { Component } from 'react'

// 收集表单数据——受控组件
export default class Form extends Component {

  state = {
    username: '',
    password: '',
  }

  handleSubmit = event => {
    event.preventDefault();
  }

  // 高阶函数————函数的柯里化
  saveFormByType = type => {
    return event => {
      this.setState({ [type]: event.target.value });
    }
  }

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <span>用户名：</span>
          <input onChange={this.saveFormByType('username')} type="text" name="username"/>
          <br/>
          <br />
          <span>密 码：</span>
          <input onChange={this.saveFormByType('password')} type="password" name="password"/>
          <br/>
          <br />
          <button>登录</button>
        </form>
        <hr />
        <div className="result">
          <p>用户名：{this.state.username}</p>
          <p>密码：{this.state.password}</p>
        </div>
      </div>
    )
  }
}
