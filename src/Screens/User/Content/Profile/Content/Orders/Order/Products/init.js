export const initData = {
	datas:Array(1).fill(undefined),
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
		case 'set_datas':{
			return {
				...prevState,
				datas: Array.isArray(payload) && payload || []
			}
		}
		case 'set_total':{
			payload = Number(payload);
			return {
				...prevState,
				total:!Number.isNaN(payload) && payload || 0
			}
		}
		case 'set_page':{
			payload = Number(payload);
			return {
				...prevState,
				page:!Number.isNaN(payload) && payload  || 0
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