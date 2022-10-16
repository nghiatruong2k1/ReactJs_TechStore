export const initState = {
	data:0,
	isLoading:true,
};
export const initCase = {
	SET_DATA:'[set_data,?num]',
	SET_LOADING:'[set_loading,?bool]'
};
export function reducerState(prevState, [key, payload]) {
  switch (key) {
	case initCase.SET_DATA:{
		if(payload !== prevState.data){
			return {
				...prevState,
				data: payload > 0 ? payload : 0
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
    default: {
      console.log(`không tôn tại case`, key, initCase);
    }
  }
  return prevState;
}
