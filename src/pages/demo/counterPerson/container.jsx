import { connect } from 'react-redux'
import Counter3 from './counter3'
import { createIncrementAction, createDecrementAction, createIncrementAsyncAction } from './redux/action'

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

export default connect(mapStateToProps, mapDispatchToProps)(Counter3);
