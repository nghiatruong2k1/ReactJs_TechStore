
export const initState = {
	data:{},
	isLoading:true,
	index:0,
	limit:8
};
export const initCase = {
	SET_DATA:'[set_data,?object]',
	SET_INDEX:'[set_index,?num]',
	SET_LOADING:'[set_loading,?bool]'
};
export function reducerState(prevState, [key, payload]) {
  switch (key) {
	case initCase.SET_DATA:{
		if(payload !== prevState.data){
			return {
				...prevState,
				data:typeof payload === 'object' ? payload : {}
			}; 
		}
		break;
	}
	case initCase.SET_LOADING:{
		if (payload !== prevState.isLoading) {
			return {
			  ...prevState,
			  isLoading: typeof payload === 'boolean' ? payload : !prevState.isLoading,
			};
		  }
		break;
	}
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
