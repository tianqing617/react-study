import React, { Component } from 'react'
import { Input, Button } from 'antd';
import ListShow from './show'
import { saveToStorage, getFromStorage } from './utils'
import TypeEnum from './enum'
import './index.scss'

export default class TodoList extends Component {
  state = {
    content: '',

    todoList: [],
    dustList: [],
  }
  content = '';

  componentDidMount() {
    const todoList = getFromStorage(TypeEnum.todoList);
    const dustList = getFromStorage(TypeEnum.dustList);
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

  addTodoItem = (item) => {
    console.log('addTodoItem', item);
    const { todoList } = this.state;
    // debugger
    const perfectItem = item || {
      id: new Date().getTime(),
      content: this.state.content,
      status: false, // false 未选中，true 已选中
    }

    const list = [ perfectItem, ...todoList ];
    this.setState({ todoList: list });

    // 清空输入框
    this.setState({ content: '' });

    // 数据持久化
    saveToStorage(TypeEnum.todoList, list);
  }
  delItem = (type, id) => {
    const list = this.state[type].filter(item => {
      return item.id !== id;
    });
    this.setState({ [type]: list });

    saveToStorage(type, list);
  }

  // TODO: 代码需要优化
  addDustItem = (item) => {
    const { dustList } = this.state;

    const list = [ item, ...dustList ];
    this.setState({ dustList: list });

    saveToStorage(TypeEnum.dustList, list);
  }

  render() {
    return (
      <div className="todolist">
        <div className="todo">
          {/* header */}
          <div className="todo-header">
            <Input className="input" value={this.state.content} onChange={this.saveContent} placeholder="Please input the task" />
            <Button type="primary" onClick={() => this.addTodoItem()}>Add</Button>
          </div>

          {/* body */}
          <ListShow dataList={this.state.todoList}
            handleAddDustList={this.addDustItem.bind(this)}
            handleDelList={this.delItem.bind(this)}
          />
        </div>
        <ul className="dust">
          <ListShow dataList={this.state.dustList}
            handleAddTodoList={this.addTodoItem.bind(this)}
            handleDelList={this.delItem.bind(this)}
          />
        </ul>
      </div>
    )
  }
}
