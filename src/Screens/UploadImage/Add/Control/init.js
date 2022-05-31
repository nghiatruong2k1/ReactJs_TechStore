export const initData = {
	isOpen:false
};
export function reducer(prevState,[key,payload]) {
	switch(key){
		case 'set_open':{
			return {
				...prevState,
				isOpen:Boolean(payload)
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
