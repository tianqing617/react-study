import { INCREMENT, DECREMENT } from '../constant'

export const createIncrementAction = data => ({ type: INCREMENT, data })

export const createDecrementAction = data => {
  return { type: DECREMENT, data };
}

export const createIncrementAsyncAction = (data, ms) => {
	return dispatch => {
		setTimeout(() => {
			dispatch(createIncrementAction(data))
		}, ms);
	}
}