export const initData = {
	isOpen:false,
	data:undefined,
	action:""
};
export function reducer(prevState,{key,payload}) {
	switch(key){
		case 'set':{
			return {
				...prevState,
				...payload
			}
		}
		case 'open':{
			return {
				...prevState,
				isOpen:true
			}
		}
		case 'action':{
			return {
				...prevState,
				action:payload
			}
		}
		case 'close':{
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
