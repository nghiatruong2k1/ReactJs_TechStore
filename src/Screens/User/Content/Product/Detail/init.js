export const initData = {
	data:null,
	quantity:1,
	isLoading:false
};
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
				data:(typeof(payload) === 'object') && payload || null
			}
		}
		case 'set_quantity':{
			return {
				...prevState,
				quantity:Number.isNaN(payload) && Number(payload) || 0
			}
		}
		case 'set_loading':{
			return {
				...prevState,
				isLoading:Boolean(payload)
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