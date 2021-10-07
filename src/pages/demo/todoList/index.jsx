import React, { Component } from 'react'
import ListItem from './item'
import ListShow from './show'
import './index.scss'

export default class TodoList extends Component {
  render() {
    return (
      <div className="todolist">
        <div className="todo">
          {/* header */}
          <div className="todo-header">
            <ListItem type="header" />
          </div>

          {/* body */}
          <ListShow />
        </div>
        <ul className="dust">
          <ListShow />
        </ul>
      </div>
    )
  }
}
