export const initData = {
	limit:5,
	page:1,
	datas:[],
	total:0,
	sort:null,
	filter:{},
	isLoading:false,
	enableEdit:false,
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
		case 'add_data':{
			return{
				...prevState,
				datas:[payload,...prevState.datas]
			}
		}
		case 'remove_data':{
			return{
				...prevState,
				datas:prevState.datas.filter(function(data,index){
					return data != payload
				})
			}
		}
		case 'change_data':{
			return{
				...prevState,
				datas:prevState.datas.map(function(data,index){
					return {
						...data
					}
				})

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
		case 'set_edit':{
			return {
				...prevState,
				enableEdit:Boolean(payload)
			}
		}
		case 'set_sort':{
			const [name,desc] = payload;
			const newSort = name + (desc && '_Desc' || "");
			return {
				...prevState,
				sort: newSort != prevState.sort ? newSort : null
			}
		}
		case 'change_filter':{
			return {
				...prevState,
				filter:{
					...prevState.filter,
					...payload
				}
			}
		}
		case 'set_trash':{
			return {
				...prevState,
				inTrash:Boolean(payload)
			}
		}
		case 'reset':{
			return {
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

export function reducerDisplay(prevState,[key,payload]) {
	switch(key){
		case 'toggle_show':{
			payload.hidden = !payload.hidden;
			return[...prevState]
		}
		default:{
		console.log(key,{prevState,"error":"Không tồn tại action"})
			return [...prevState]
		}
	}
};

