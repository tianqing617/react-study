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

  addTodoItem = () => {
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
  delTodoItem = (id) => {
    const list = this.state.todoList.filter(item => {
      return item.id !== id;
    });
    this.setState({ todoList: list });
  }
  addDustItem = (item) => {
    const { dustList } = this.state;

    this.setState({
      dustList: [
        item,
        ...dustList,
      ]
    })
  }

  render() {
    return (
      <div className="todolist">
        <div className="todo">
          {/* header */}
          <div className="todo-header">
            <Input className="input" onChange={this.saveContent} placeholder="Please input the task" />
            <Button type="primary" onClick={this.addTodoItem}>Add</Button>
          </div>

          {/* body */}
          <ListShow dataList={this.state.todoList}
            handleAddDustList={this.addDustItem.bind(this)}
            handleDelTodoList={this.delTodoItem.bind(this)}
          />
        </div>
        <ul className="dust">
          <ListShow dataList={this.state.dustList}/>
        </ul>
      </div>
    )
  }
}
