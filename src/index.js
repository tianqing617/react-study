import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
// import reportWebVitals from './reportWebVitals';

// 渲染虚拟DOM到页面
ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

/**
 * JSX 语法规则
 * 1. 定义虚拟DOM时，不要写引号。
 * 2. 标签中混入JS表达式时要用 {}。
 * 3. 样式的类名指定不要用class，要用className，因为class是关键字。
 * 4. 内联样式，要用style={{key: value}}的形式。
 * 5. 只有一个根标签。
 * 6. 标签必须闭合。
 * 7. 标签首字母
 *    a. 若小写字母开头，则将该标签转为html中同名元素，若html中无该标签对应的同名元素，则报错。
 *    b. 若大写字母开头，react就去渲染对应的组件，若组件没有定义，则报错。
 */

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
