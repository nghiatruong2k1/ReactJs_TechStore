export const initState = {
	data:[],
	isLoading:false,
	limit:3,
    total:0,
	page:1
};
export const initCase = {
	SET_DATA:'[set_data,?array]',
	SET_LOADING:'[set_loading,?bool]',
    SET_TOTAL:'[set_total,?num]',
	SET_PAGE:'[set_page,?num]'
};
export function reducerState(prevState, [key, payload]) {
  switch (key) {
	case initCase.SET_DATA:{
		if(payload !== prevState.data){
			return {
				...prevState,
				data:(Array.isArray(payload) && payload) || Array(prevState.limit).fill({})
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
    case initCase.SET_TOTAL:{
		if (payload !== prevState.total) {
			return {
			  ...prevState,
			  total:payload > 0 ? payload : 0,
			};
		  }
		break;
	}
	case initCase.SET_PAGE:{
		if (payload !== prevState.page) {
			return {
			  ...prevState,
			  page:payload > 1 ? payload : 1,
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
