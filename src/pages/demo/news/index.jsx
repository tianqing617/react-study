import React, { Component } from 'react'
import './index.scss'

// getSnapshotBeforeUpdate 练习 —— 滚动条定位
export default class News extends Component {
  state = {
    list: [], // 生成的新闻数据集
    currentNews: 0, // 当前选中的新闻
  }

  timer = null; // 计时器
  num = 10; // 根据数量，生成对应个数的新闻
  newsRef = React.createRef();

  componentDidMount() {
    console.log('componentDidMount')
    console.log(this.newsRef)
    // 挂载后即获取数据
    this.setNewsList(this.state.num);

    this.timer = setInterval(() => {
      this.num += 1;
      this.setNewsList(this.num);
    }, 2000)
  }

  getSnapshotBeforeUpdate() {
    // console.log('getSnapshotBeforeUpdate');
    return this.newsRef.current.scrollHeight;
    // return null;
  }

  componentDidUpdate(preProps, preState, height) {
    const currentHeight = this.newsRef.current.scrollHeight
    const top = currentHeight - height;
    console.log('componentDidUpdate', height, currentHeight, top)

    if (this.state.currentNews > 0) {
      // 每次渲染，滚动条本来就不会改变，故不需要此方式处理。只要说清晰，snapshot生命周期的用法即可。
      // this.newsRef.current.scrollTop += top - 10;
    }
  }

  componentWillUnmount() {
    clearInterval(this.state.timer);
  }

  // 新闻数据集合
  setNewsList = (num) => {
    const list = []
    for (let i = 1; i <= num; i++) {
      list.push({
        id: i,
        title: `news${i}`
      });
    }

    this.setState({ list });
  }

  // 设置选中新闻
  selectNews = (event) => {
    // console.log('n', event)
    const id = event.target.innerText.replace('news', '');
    this.setState({ currentNews: parseInt(id)});
  }

  render() {
    const getNewsItem = () => {
      const { list, currentNews } = this.state;
      return list.map(item => {
        return (
          <li key={item.id}
            className={ currentNews === item.id ? 'select' : '' }
          >
            news{item.id}
          </li>
        )
      });
    }

    return (
      <ul ref={this.newsRef} className="news" onClick={this.selectNews}>
        {getNewsItem()}
      </ul>
    )
  }
}
