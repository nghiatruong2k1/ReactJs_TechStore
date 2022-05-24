
export const initData = {
	controller:"", 
	query:"",
	isShow:false
};
export function reducer(prevState,[key,payload]) {
	switch(key){
		case 'set':{
			return {
				...prevState,
				...payload
			}
		}
		case 'set_query':{
			return {
				...prevState,
				query:payload
			}
		}
		case 'set_controller':{
			return {
				...prevState,
				controller:payload
			}
		}
		case 'set_show':{
			return {
				...prevState,
				isShow:Boolean(payload)
			}
		}
		default:{
			console.log(key,{prevState,"error":"Không tồn tại action "+key})
			return{
				...prevState
			}
		}
	}
};