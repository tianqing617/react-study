import logo from './logo.svg';
import React, { Component } from 'react'
import './index.css'

export default class Header extends Component {
  render() {
    return (
      <div className="header">
        <div className="logo" onClick={ this.gotoAddress }>
          <img src={ logo } className="App-logo" alt="logo" />
        </div>

        <ul>
          <li>
            <a href="https://zh-hans.reactjs.org/docs/getting-started.html" rel="noreferrer" target="_blank">React官网</a>
          </li>
          <li>
            <a href="https://reactrouter.com/" rel="noreferrer" target="_blank">React Router</a>
          </li>
          <li>
            <a href="https://docschina.org/" rel="noreferrer" target="_blank">印记中文</a>
          </li>
          <li>
            <a href="https://github.com/facebook/create-react-app" rel="noreferrer" target="_blank">createReactApp官网</a>
          </li>
          <li>
            <a href="https://www.html.cn/create-react-app/" rel="noreferrer" target="_blank">createReactApp中文</a>
          </li>
        </ul>
      </div>
    )
  }

  gotoAddress() {
    // window.location.href = 'https://zh-hans.reactjs.org/docs/getting-started.html';
    window.open('https://zh-hans.reactjs.org/docs/getting-started.html');
  }
}
