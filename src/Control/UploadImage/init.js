export const initData = {
	isOpen:false,
	select:{},
	action:"",
	event:{}
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
				,event:{
					onSubmit:payload.onSubmit,
					onCancel:payload.onCancel
				}
			}
		}
		case 'select':{
			return {
				...prevState
				,select:{
					...payload
				}
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
