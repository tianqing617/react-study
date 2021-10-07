import React, { Component } from 'react'
import { Radio, Input } from 'antd';

export default class Add extends Component {
  render() {
    return (
      <div className="add">
        <Radio></Radio>
        <Input className="input" placeholder="Basic usage" />
      </div>
    )
  }
}
