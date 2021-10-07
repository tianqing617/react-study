import React, { Component } from 'react'
import { Radio, Input } from 'antd';

export default class ShowList extends Component {
  render() {
    const { dataList } = this.props;

    return (
      <ul className="show">
        {
          dataList.map(item => {
            return (
              <li key={item.id}>
                <Radio checked={item.status}></Radio>
                <Input className="input" disabled value={item.content} />
              </li>
            )
          })
        }
      </ul>
    )
  }
}
