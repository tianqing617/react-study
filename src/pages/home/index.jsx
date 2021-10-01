import React, { Component } from 'react'
import { Link, Route } from 'react-router-dom'
import './index.css'
import Header from './header'

import Hello from '../demo/helloWorld'
import Weather from '../demo/weather'
import TodoList from '../demo/todoList'

export default class Home extends Component {
  render() {
    return (
      <div className="home">
        <Header></Header>
        <div className="main">
          {/* 导航区 */}
          <div className="sidebar">
            <Link className="nav-item" to="/demo/hello">Hello</Link>
            <Link className="nav-item" to="/demo/weather">Weather</Link>
            <Link className="nav-item" to="/demo/todolist">TodoList</Link>
          </div>
          
          {/* 主内容区 */}
          <div className="content">
            <Route path="/demo/hello" component={ Hello }/>
            <Route path="/demo/weather" component={ Weather }/>
            <Route path="/demo/todolist" component={ TodoList }/>
          </div>
        </div>
      </div>
    )
  }
}
