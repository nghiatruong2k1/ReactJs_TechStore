import {memo,useEffect,createContext} from 'react';
export const RecommendContext = createContext({});
function RecommendProvider({state,dispath,children,...props}){
	const handle = {
		set:(key,value)=>{
			dispath({key:'set',payload:{[key]:value}})
		}
	}
  	const Fetch = global.config.useFetch();
	useEffect(function() {
	    Fetch.get({
	        api:"api/product/type/2",
	        params:{
	        	limit:state.limit ?? 1,
	        	offset:0
	        },onThen:(result => {
	            handle.set("datas",result.data);
	        }),onError:(error=> {
	            handle.set("datas",[]);
	        }),onStart:(()=>{
	        	handle.set("datas",Array(state.limit ?? 1).fill(undefined));
	        	handle.set("isLoading",true)
	        }),onEnd:(()=>{
	        	handle.set("isLoading",false)
	        })
	    })
	},[])
	return(
		<RecommendContext.Provider value={{state,handle}}>
			{children}
		</RecommendContext.Provider>
	)
}
export default memo(RecommendProvider);