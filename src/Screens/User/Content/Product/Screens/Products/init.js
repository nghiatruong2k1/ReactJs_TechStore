

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
			payload = Number(payload);
			return {
				...prevState,
				total:(!Number.isNaN(payload) && payload) || 0
			}
		}
		case 'set_page':{
			payload = Number(payload)
			return {
				...prevState,
				page:(!Number.isNaN(payload) && payload) || 1
			}
		}
		case 'set_limit':{
			payload = Number(payload)
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
			payload = Number(payload)
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
	return prevState;
};
