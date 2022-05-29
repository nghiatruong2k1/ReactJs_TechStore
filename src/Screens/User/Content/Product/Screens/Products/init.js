

import { createContext } from "react";
export const ProductsContext = createContext();
export const initData = {
	view:0,
	limit:5,
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


export async function handleGetDatas({getter,dispath,state,action,feild,onStart,onEnd}){
	await getter({
	  api:"api/product/"+action+"/"+feild,
	  params:{
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
export async function handleGetLength({getter,dispath,action,feild}){
  await getter({
	api:"api/product/"+action+"/count/"+feild
	,onThen:(result => {
		dispath(['set_total',result.data])
	}),onError:(error=> {
		dispath(['set_total'])
	})
})
}
export async function handleGetTitle({getter,action,feild}){
  await getter({
	api:`api/${action}/${feild}`
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