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
			const index = Number(payload);
			if(!Number.isNaN(index) && prevState[index]){
				prevState[index] = {
					...prevState[index],
					hidden:!Boolean(prevState[index].hidden)
				}
			}
			return[...prevState]
		}
		default:{
		console.log(key,{prevState,"error":"Không tồn tại action"})
			return{
				...prevState
			}
		}
	}
};

