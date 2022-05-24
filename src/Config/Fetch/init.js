export const initState = {
	data:null,
	isLoading:false,
	isError:false
};
export const initCase = {
	Set:"set",
	SetData:'set_data',
	SetLoading:'set_loading',
	SetError:'set_error'
}
export function reducer(prevState,[key,payload]) {
	switch(key){
		case 'set':{
			return {
				...prevState,
				...payload
			}
		}
		case 'set_data':{
			return {
				...prevState,
				data:payload
			}
		}
		case 'set_loading':{
			return{
				...prevState,
				isLoading:payload
			}
		}
		case 'set_error':{
			return{
				...prevState,
				isError:payload
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