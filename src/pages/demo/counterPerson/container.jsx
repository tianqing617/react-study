import { connect } from 'react-redux'
import Counter3 from './counter3'
import { createIncrementAction, createDecrementAction, createIncrementAsyncAction } from './redux/action'

// 简写形式，详细写法见：counter2组件
export default connect(
  state => ({ sum: state }),
  {
    increment: createIncrementAction,
    decrement: createDecrementAction,
    incrementAsync: createIncrementAsyncAction
  }
)(Counter3);
