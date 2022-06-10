import {useParams} from "react-router-dom";
import {memo,useEffect,useMemo} from 'react';
import {useFetch} from "../../../../../../../Config/Fetch/";
import {ProductsContext} from "../init";
const bodyRoot = document.getElementById("root");


function ProductsProvider({state,dispath,action,feild,handle,children,...props}){
	const Fetch = useFetch("product list");
	useEffect(function(){
		if(state.view == 0){
			dispath(["set_limit",5]);
		}else{
			dispath(["set_limit",8]);
		}
	},[state.view]);

	useEffect(function(){
		dispath(["set_page",1]);
		dispath(["set_total",0]);
	},[action,feild,state.view]);

	async function handleGetDatas({onStart,onEnd}){
		return await Fetch.get({
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
	async function handleGetLength(){
		return await Fetch.get({
			api:"api/product/"+action+"/count/"+feild
			,onThen:(result => {
				dispath(['set_total',result.data])
			}),onError:(error=> {
				dispath(['set_total'])
			})
		})
	}

  	useEffect(async function() { 
	    if(Boolean(action) && Boolean(feild)){
			return await handleGetLength();
		};
	},[action,feild,state.sort]);

	useEffect(async function() {
		if(Boolean(action) && Boolean(feild)){
			bodyRoot.scrollTop = 0;
			return await handleGetDatas({	  
				onStart:(()=>{
					dispath(['set_data',Array(state.limit ?? 1).fill(undefined)])
					dispath(['set_loading',true])
				}),onEnd:(()=>{
					dispath(['set_loading',false])
				})
			})
		};
		
	},[action,feild,state.page,state.sort,state.limit]);
	return(
		<ProductsContext.Provider value={{state,dispath}}>
			{children}
		</ProductsContext.Provider>
	)
}
export default memo(ProductsProvider);