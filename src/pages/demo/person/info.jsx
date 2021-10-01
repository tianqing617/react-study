import React, { Component } from 'react'
import PropTypes from 'prop-types';
import './index.scss'

export default class Info extends Component {
  // 对标签属性进行类型、必要性的限制
  static propTypes = {
    name: PropTypes.string.isRequired,
    age: PropTypes.number,
    sex: PropTypes.string,
    // speak: this.propTypes.func, // function 是关键字
  }

  // 指定默认标签属性值
  static defaultProps = {
    sex: 'F',
    age: 99,
  }

  render() {
    const { name, age, sex } = this.props;

    return (
      <ul className="person">
        <li>姓名：{name}</li>
        <li>年龄：{age}</li>
        <li>性别：{sex}</li>
      </ul>
    )
  }
}

