import { connect } from 'react-redux'
import Counter2 from './counter2'
import { createIncrementAction, createDecrementAction, createIncrementAsyncAction } from './reactRedux/counterAction'

function mapStateToProps(state) {
  return { sum: state };
}

function mapDispatchToProps(dispatch) {
  return {
    increment: num => dispatch(createIncrementAction(num)),
    decrement: num => dispatch(createDecrementAction(num)),
    incrementAsync: (num, ms) => dispatch(createIncrementAsyncAction(num, ms))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Counter2);
