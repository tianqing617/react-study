import React, { Component } from 'react'
import ListItem from './item'

export default class ShowList extends Component {
  render() {
    const list = [{
      id: 1,
      content: '中国十一',
      status: true,
    }, {
      id: 2,
      content: '民国双十',
      status: true,
    }];

    return (
      <ul className="show">
        {
          list.map(item => {
            return (
              <li key={item.id}>
                <ListItem type="body" content={item.content} status={item.status} />
              </li>
            )
          })
        }
      </ul>
    )
  }
}
