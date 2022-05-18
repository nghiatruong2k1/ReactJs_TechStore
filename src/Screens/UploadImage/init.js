export const initData = {
	action:"",
	select:null
};
export function reducer(prevState,[key,payload]) {
	switch(key){
		case 'set_action':{
			return{
				...prevState,
				action:payload
			}
		}
		case 'set_select':{
			return{
				...prevState,
				select:payload
			}
		}
		case 'clear':{
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