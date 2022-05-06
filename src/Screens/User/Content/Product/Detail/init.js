export const initData = {
	data:null,
	quantity:1,
	isLoading:false
};
export function reducer(prevState,[key,payload]) {
	switch(key){
		case 'set':{
			return {
				...prevState,
				...payload
			}
		}
		case 'data':{
			return {
				...prevState,
				data:payload
			}
		}
		case 'quantity':{
			return {
				...prevState,
				quantity:payload
			}
		}
		case 'is_loading':{
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