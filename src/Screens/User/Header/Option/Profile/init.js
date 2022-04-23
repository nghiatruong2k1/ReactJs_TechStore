export const initData = {
	data:{
		Name:"Tài khoản",
		Id:0,
		TypeId:0
	},isOpen:false
	,isLoading:false
};
export function reducer(prevState,{key,payload}) {
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
				data:{
					...prevState.data,
					...payload
				}
			}
		}
		case 'reset':{
			return{
				...initData
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