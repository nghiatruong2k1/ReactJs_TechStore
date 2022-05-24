
export const initData = {
	isLoading:true,
	index:0,
	datas:Array(8).fill(undefined)
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
				datas:Array.isArray(payload) && payload || []
			}
		}
		case 'set_loading':{
			return {
				...prevState,
				isLoading:Boolean(payload)
			}
		}
		case 'set_index':{
			payload = Number(payload)
			return {
				...prevState,
				index: !Number.isNaN(payload) && payload || 0
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