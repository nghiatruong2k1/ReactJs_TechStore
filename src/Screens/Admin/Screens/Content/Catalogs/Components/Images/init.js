export const initData = {
	limit:5,
	page:1,
	datas:[],
	total:0,
	isLoading:false,
	inTrash:false
};
export function reducer(prevState,[key,payload]) {
	switch(key){
		case 'set_datas':{
			return {
				...prevState,
				datas:Array.isArray(payload) && payload || []
			}
		}
		case 'set_total':{
			const total = Number(payload);
			return {
				...prevState,
				total:!Number.isNaN(total) && total || 0
			}
		}
		case 'set_page':{
			const page = Number(payload);
			return {
				...prevState,
				page:!Number.isNaN(page) && page || 0
			}
		}
		case 'set_loading':{
			return {
				...prevState,
				isLoading:Boolean(payload)
			}
		}
		case 'set_trash':{
			return {
				...prevState,
				inTrash:Boolean(payload)
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
