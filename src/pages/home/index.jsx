import React, { Component } from 'react'
import { NavLink, Route, Switch } from 'react-router-dom'
import './index.css'
import Header from './header'
import MenuData from './menu'

export default class Home extends Component {
  render() {
    // 导航菜单
    const getNavLink = () => {
      return MenuData.map(item => {
        return <NavLink key={ item.name } to={ item.path }>{ item.name }</NavLink>
      })
    }
    // 注册路由
    const getRouter = () => {
      return MenuData.map(item => {
        return <Route key={ item.name } path={ item.path } component={ item.component }/>
      })
    }

    return (
      <div className="home">
        <Header></Header>
        <div className="main">
          {/* 导航区 */}
          <div className="sidebar">
            {getNavLink()}
          </div>
          
          {/* 主内容区 */}
          <div className="content">
            {/* 注册路由 */}
            <Switch>
              {getRouter()}
            </Switch>
          </div>
        </div>
      </div>
    )
  }
}
