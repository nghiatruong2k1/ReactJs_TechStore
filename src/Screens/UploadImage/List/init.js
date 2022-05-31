export const initData = {
	limit:12,
	page:1,
	datas:[],
	total:0,
	isLoading:false
};
export function reducer(prevState,[key,payload]) {
	if(prevState[key] === undefined){
		console.log(key,{prevState,"error":"Không tồn tại action"})
		return{
			...prevState
		}
	}else{
		return {
			...prevState,
			[key]:payload
		}
	}
};
