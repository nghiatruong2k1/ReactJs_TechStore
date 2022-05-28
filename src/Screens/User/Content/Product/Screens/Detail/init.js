export const initData = {
	data:{},
	images:[],
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
				data:(typeof(payload) === 'object') && payload || {}
			}
		}
		case 'set_images':{
			return {
				...prevState,
				images:(Array.isArray(payload)) && payload || []
			}
		}
		case 'set_quantity':{
			return {
				...prevState,
				quantity:payload
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