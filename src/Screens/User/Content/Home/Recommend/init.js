
export const initData = {
	datas:[],
	limit:12,
	isLoading:false
};
export function reducer(prevState,{key,payload}) {
	switch(key){
		case 'set':{
			return {
				...prevState,
				...payload
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