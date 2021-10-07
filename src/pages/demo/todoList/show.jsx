import React, { Component } from 'react'
import { Radio, Input } from 'antd';

export default class ShowList extends Component {
  saveDustList = (currentItem) => {
    return () => {
      // 向父组件传递
      this.props.handleDelTodoList(currentItem.id);

      this.props.handleAddDustList(
        Object.assign(currentItem, { status: true })
      );
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
                <Radio checked={item.status} onChange={this.saveDustList(item)}></Radio>
                <Input className="input" disabled value={item.content} />
              </li>
            )
          })
        }
      </ul>
    )
  }
}
