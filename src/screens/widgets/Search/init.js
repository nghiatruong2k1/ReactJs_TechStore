export const initState = {
	controller:"",
	query:""
};
export const initCase = {
	SET_CONTROLLER:'[set_controller,?string]',
	SET_QUERY:'[set_query,?string]'
};
export function reducerState(prevState,[key,payload]){
	switch(key){
		case initCase.SET_CONTROLLER:{
			if (payload !== prevState.controller) {
				return {
				  ...prevState,
				  controller: payload ?? "",
				};
			  }
			  break;
		}
		case initCase.SET_QUERY:{
			if (payload !== prevState.query) {
				return {
				  ...prevState,
				  query:payload ?? "",
				};
			  }
			  break;
		}
		default:{
			console.log(`không tôn tại case`,key,initCase)
		}
	}
	return prevState
};