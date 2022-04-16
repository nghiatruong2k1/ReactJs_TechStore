
export const initData = {
	controller:"", 
	query:""
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
			console.log(key,{prevState,"error":"Không tồn tại action "+key})
			return{
				...prevState
			}
		}
	}
};