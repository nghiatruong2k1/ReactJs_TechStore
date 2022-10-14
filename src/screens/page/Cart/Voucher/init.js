export const initState = {
    value:'',
    valid:''
};
export const initCase = {
    CHANGE_VALID:'[CHANGE_VALID,?str]',
    CHANGE_VALUE:'[CHANGE_VALUE,?str]',
};
export function reducerState(prevState,[key,payload]){
    switch(key){
        case initCase.CHANGE_VALID:{
			if (payload !== prevState.valid) {
				return {
				  ...prevState,
				  valid:payload ?? "",
				};
			  }
			  break;
		}
        case initCase.CHANGE_VALUE:{
			if (payload !== prevState.value) {
				return {
				  ...prevState,
				  value:payload ?? "",
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