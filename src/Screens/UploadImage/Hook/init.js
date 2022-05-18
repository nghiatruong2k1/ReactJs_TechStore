export const initData = {
	isOpen:false
};
export function reducer(prevState,{key,payload}) {
	switch(key){
		case 'open':{
			return {
				...prevState,
				isOpen:true
			}
		}
		case 'close':{
			return{
				...prevState,
				isOpen:false
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
