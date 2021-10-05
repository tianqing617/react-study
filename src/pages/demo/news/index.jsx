import React, { Component } from 'react'
import './index.scss'

// getSnapshotBeforeUpdate 练习 —— 滚动条定位
export default class News extends Component {
  state = {
    num: 10,
    currentNews: 0,
  }

  selectNews = (event) => {
    console.log('n', event)
    const id = event.target.innerText.replace('news', '');
    this.setState({ currentNews: parseInt(id)});
  }

  render() {
    const getNewsItem = () => {
      const items = []
      for (let i = 1; i < 10; i++) {
        // 注意：要 this.state.currentNews，而不是 this.currentNews
        const name = (this.state.currentNews === i ? 'select' : '');
        items.push(
          <li key={i}
            className={ name }
          >
            news{i}
          </li>
        );
      }

      return items;
    }

    return (
      <ul className="news" onClick={this.selectNews}>
        {getNewsItem()}
      </ul>
    )
  }
}
