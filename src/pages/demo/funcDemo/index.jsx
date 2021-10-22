import React from 'react'
import { Card } from 'antd'
import './index.scss'

// 函数式组件
export default function FuncDemo() {
  // State Hook
  // 语法：const [ xxx, setXxx ] = React.useState(initValue)
  const [num, setNum] = React.useState(0);
  const [ count, setCount ] = React.useState(0);

  function increase() {
    setNum(num => num + 1);
  }

  // Effect Hook
  // 1. componentDidMount
  // 2. componentDidUpdate
  // 3. componentWillUnmount

  React.useEffect(() => {
    // 在此执行副作用操作，即相当于 componentDidMount
    console.log('useEffect inner');
    const timer = setInterval(() => {
      setCount(count => count + 1);
    }, 1000);

    return () => {
      // 组件卸载前执行，即相当于 componentWillUnmount
      console.log('useEffect return');
      clearInterval(timer);
    }
  }, []);
  // stateValue 如果是 []，回调函数只会在第一次 render 后执行。
  // stateValue 如果指定某个state变量，在此变量改变时执行。
  // 即相当于 componentDidUpdate


  // Ref Hook
  const inputRef = React.useRef();

  function show() {
    console.log('inputRef', inputRef);
    console.log(inputRef.current.value);
  }

  return (
    <div className="func-demo">
      <Card title="State Hook">
        <h2>num: {num}</h2>
        <button onClick={increase}>sum</button>
      </Card>
      
      <Card title="Ref Hook">
        <input type="text" ref={inputRef} />
        <button onClick={show}>show</button>
      </Card>
      
      <Card title="Effect Hook">
        <h2>count: {count}</h2>
      </Card>
    </div>
  )
}