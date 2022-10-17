export const initState = {
	limit:8
};
export const initCase = {
    SET_TOTAL:'[set_total,?num]'
};
export function reducerState(prevState, [key, payload]) {
  switch (key) {
    case initCase.SET_TOTAL:{
		if (payload !== prevState.total) {
			return {
			  ...prevState,
			  total:payload > 0 ? payload : 0,
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
