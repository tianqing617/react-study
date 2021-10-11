import { INCREMENT, DECREMENT } from '../constant'

// 初始化状态
const initState = 3

export default function counterReducer(preState = initState, action) {
  console.log('store', preState, action);
	const { type, data } = action;

	switch (type) {
		case INCREMENT:
      console.log('increment');
			return preState + data;
		case DECREMENT:
			return preState - data;
		default:
			return preState;
	}
}