import logo from './logo.svg';
import React, { Component } from 'react'
import './index.css'

export default class Header extends Component {
  render() {
    return (
      <div className="header">
        <div className="logo">
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
        </ul>
      </div>
    )
  }
}
