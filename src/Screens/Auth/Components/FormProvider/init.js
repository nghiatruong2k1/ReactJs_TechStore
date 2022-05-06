
export function reducer(prevState,[key,payload]) {
	switch(key){
		case 'set_value':{
			return {
				...prevState,
				values:{
					...prevState.values,
					...payload
				}
			}
		}
		case 'set_valid':{
			return {
				...prevState,
				valids:{
					...prevState.valids,
					...payload
				}
			}
		}
		case 'set_loading':{
			return {
				...prevState,
				isLoading:payload
			}
		}
		default:{
		console.log(key,{prevState,"error":"Không tồn tại action"})
			return{
				...prevState
			}
		}
	}
};
