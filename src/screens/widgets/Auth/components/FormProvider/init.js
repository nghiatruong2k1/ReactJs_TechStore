export const initCase = {
	CHANGE_VALUE:'[change_value,object]',
	CHANGE_VALID:'[change_valid,object]'
};
export function reducerState(prevState,[key,payload]){
	switch(key){
		case initCase.CHANGE_VALUE:{
			return{
				...prevState,
				values:{...prevState.values,...payload}
			}
		}
		case initCase.CHANGE_VALID:{
			return{
				...prevState,
				valids:{...prevState.valids,...payload}
			}
		}
		default:{
			console.log(`không tôn tại case`,key,initCase)
		}
	}
	return prevState
};