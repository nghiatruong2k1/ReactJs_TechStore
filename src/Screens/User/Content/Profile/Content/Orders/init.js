export const initData = {
	datas:Array(1).fill(undefined),
	status:Array(4).fill(undefined),
	statusIndex:-1,
	limit:3,
	page:1,
	total:0,
	isLoading:true
};
export function reducer(prevState,[key,payload]) {
	switch(key){
		case 'set':{
			return {
				...prevState,
				...payload
			}
		}
		case 'set_loading':{
			return {
				...prevState,
				isLoading:Boolean(payload)
			}
		}
		case 'set_datas':{
			return {
				...prevState,
				datas: Array.isArray(payload) && payload || []
			}
		}
		case 'set_total':{
			payload = Number(payload)
			return {
				...prevState,
				total:!Number.isNaN(payload) && payload || 0
			}
		}
		case 'set_page':{
			payload = Number(payload)
			return {
				...prevState,
				page:!Number.isNaN(payload) && payload || 0
			}
		}
		case 'set_status_index':{
			return {
				...prevState,
				statusIndex:!Number.isNaN(payload) && Number(payload) || 0
			}
		}
		case 'set_status':{
			return {
				...prevState,
				status: Array.isArray(payload) && payload || []
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
