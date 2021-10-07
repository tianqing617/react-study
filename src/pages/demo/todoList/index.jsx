import React, { Component } from 'react'
import { Input, Button } from 'antd';
import ListShow from './show'
import './index.scss'

export default class TodoList extends Component {
  state = {
    content: '',

    todoList: [],
    dustList: [],
  }
  content = '';

  saveContent = (event) => {
    this.setState({ content: event.target.value });
  }

  addItem = () => {
    const { todoList } = this.state;
    const id = new Date().getTime();
    const item = {
      id,
      content: this.state.content,
      status: false, // false 未选中，true 已选中
    };

    this.setState({ todoList: [
      item,
      ...todoList,
    ]});
  }

  render() {
    return (
      <div className="todolist">
        <div className="todo">
          {/* header */}
          <div className="todo-header">
            <Input className="input" onChange={this.saveContent} placeholder="Please input the task" />
            <Button type="primary" onClick={this.addItem}>Add</Button>
          </div>

          {/* body */}
          <ListShow dataList={this.state.todoList} />
        </div>
        <ul className="dust">
          <ListShow dataList={this.state.dustList}/>
        </ul>
      </div>
    )
  }
}
