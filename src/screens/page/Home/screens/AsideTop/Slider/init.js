
export const initState = {
	data:[],
	isLoading:true,
	limit:8
};
export const initCase = {
	SET_DATA:'[set_data,?array]',
	SET_LOADING:'[set_loading,?bool]'
};
export function reducerState(prevState, [key, payload]) {
  switch (key) {
	case initCase.SET_DATA:{
		if(payload !== prevState.data){
			return {
				...prevState,
				data:(Array.isArray(payload) && payload) || Array(prevState.limit).fill(null)
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
