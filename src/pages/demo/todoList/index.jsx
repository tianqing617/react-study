import React, { Component } from 'react'
import { Input, Button } from 'antd';
import ListShow from './show'
import { saveToStorage, getFromStorage } from './utils'
import './index.scss'

export default class TodoList extends Component {
  state = {
    content: '',

    todoList: [],
    dustList: [],
  }
  content = '';

  componentDidMount() {
    const todoList = getFromStorage('todolist');
    const dustList = getFromStorage('dustlist');
    console.log(todoList, dustList);
    
    if (todoList) {
      this.setState({ todoList });
    }
    if (dustList) {
      this.setState({ dustList });
    }
  }

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

    const list = [ item, ...todoList ];
    this.setState({ todoList: list });

    // 数据持久化
    saveToStorage('todolist', list);
  }
  delTodoItem = (id) => {
    const list = this.state.todoList.filter(item => {
      return item.id !== id;
    });
    this.setState({ todoList: list });

    saveToStorage('todolist', list);
  }

  // TODO: 代码需要优化
  addDustItem = (item) => {
    const { dustList } = this.state;

    const list = [ item, ...dustList ];
    this.setState({ dustList: list });

    saveToStorage('dustlist', list);
  }
  // TODO: 代码可以优化
  delDustItem = (id) => {
    const list = this.state.dustList.filter(item => {
      return item.id !== id;
    });
    this.setState({ dustList: list });

    saveToStorage('dustlist', list);
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
          <ListShow dataList={this.state.dustList}
            handleAddTodoList={this.addTodoItem.bind(this)}
            handleDelDustList={this.delDustItem.bind(this)}
          />
        </ul>
      </div>
    )
  }
}
