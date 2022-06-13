
export const initData = {
	limit:8,
	page:1,
	sort:null,
	total:0,
	datas:Array(1).fill(undefined),
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
		case 'set_data':{
			return {
				...prevState,
				datas:(Array.isArray(payload) && payload) || []
			}
		}
		case 'set_loading':{
			return {
				...prevState,
				isLoading:Boolean(payload)
			}
		}
		case 'set_total':{
			payload =  Number(payload);
			return {
				...prevState,
				total:(!Number.isNaN(payload) && payload) || 0
			}
		}
		case 'set_page':{
			payload =  Number(payload);
			return {
				...prevState,
				page:(!Number.isNaN(payload) && payload) || 1
			}
		}
		case 'set_limit':{
			payload =  Number(payload);
			return {
				...prevState,
				limit:(!Number.isNaN(payload) && payload) || 0
			}
		}
		case 'set_sort':{
			return {
				...prevState,
				sort:(typeof(payload) === 'string') && payload
			}
		}
		case 'set_view':{
			payload =  Number(payload);
			return {
				...prevState,
				view:(!Number.isNaN(payload) && payload) || 0
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

export async function handleGetDatas({getter,dispath,api,state,onStart,onEnd}){
	await getter({
		api:api
		,params:{
		  offset:(state.page - 1) * state.limit,
		  limit:state.limit,
		  sort:state.sort,
		},onThen:(result => {
			dispath(['set_data',result.data])
		}),onError:(error=> {
			dispath(['set_data'])
		}),onStart,onEnd
	});
  }
export  async function handleGetLength({getter,dispath,api}){
	await getter({
		api:api
		,onThen:(result => {
			dispath(['set_total',result.data])
		}),onError:(error=> {
			dispath(['set_total'])
		})
	})
  };
export async function  handleGetTitle(getter,api){
	await getter({
		api:api
		,onThen:(result => {
		  if(result.data && result.data.Name){
			global.config.setTitleWebsite(result.data.Name)
		  }else{
			global.config.setTitleWebsite("");
		  }
		}),onError:(error=> {
		  global.config.setTitleWebsite("");
		})
	})
  }
