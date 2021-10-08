import React, { Component } from 'react'
import { Checkbox, Input } from 'antd'
import TypeEnum from './enum'

export default class ShowList extends Component {
  saveList = (currentItem) => {
    return (event) => {
      console.log(event, currentItem);
      const checked = event.target.checked;
      const item = Object.assign(currentItem, { status: checked });

      if (checked) {
        // 向父组件传递
        this.props.handleDelList(TypeEnum.todoList, currentItem.id);
  
        this.props.handleAddDustList(item);
      } else {
        this.props.handleDelList(TypeEnum.dustList, currentItem.id);
        this.props.handleAddTodoList(item);
      }
    }
  }

  render() {
    const { dataList } = this.props;

    return (
      <ul className="show">
        {
          dataList.map(item => {
            return (
              <li key={item.id}>
                <Checkbox checked={item.status} onChange={this.saveList(item)}></Checkbox>
                <Input className="input" disabled value={item.content} />
              </li>
            )
          })
        }
      </ul>
    )
  }
}
