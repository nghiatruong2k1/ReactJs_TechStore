export const initData = {
	view:0,
	limit:5,
	page:1,
	total:0,
	datas:[],
	isLoading:false
};
export function reducer(prevState,{key,payload}) {
	switch(key){
		case 'set':{
			return {
				...prevState,
				...payload
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

