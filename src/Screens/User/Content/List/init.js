
export const initData = {
	limit:8,
	page:1,
	sort:null,
	total:0,
	datas:[],
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
				datas:Array.isArray(payload) && payload || []
			}
		}
		case 'set_loading':{
			return {
				...prevState,
				isLoading:Boolean(payload)
			}
		}
		case 'set_total':{
			return {
				...prevState,
				total:!Number.isNaN(payload) && Number(payload) || 0
			}
		}
		case 'set_page':{
			return {
				...prevState,
				page:!Number.isNaN(payload) && Number(payload) || 1
			}
		}
		case 'set_limit':{
			return {
				...prevState,
				limit:!Number.isNaN(payload) && Number(payload) || 0
			}
		}
		case 'set_sort':{
			return {
				...prevState,
				sort:(typeof(payload) === 'string') && payload
			}
		}
		case 'set_view':{
			return {
				...prevState,
				view:!Number.isNaN(payload) && Number(payload) || 0
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


