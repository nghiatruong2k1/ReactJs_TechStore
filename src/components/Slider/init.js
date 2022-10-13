
export const initState = {
	index:0
};
export const initCase = {
	SET_INDEX:'[set_index,?num]',
};
export function reducerState(prevState, [key, payload]) {
  switch (key) {
	case initCase.SET_INDEX:{
		if (payload !== prevState.index) {
			return {
			  ...prevState,
			  index: payload > 0 ? payload : 0,
			};
		  }
		break;
	}
    default: {
      console.log(`không tôn tại case`, key, initCase);
    }
  }
  return prevState;
}
