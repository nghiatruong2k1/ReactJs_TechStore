import {memo,createContext,useEffect} from 'react';
export const PopularContext = createContext();
function PopularProvider({state,dispath,children,...props}){
	const Fetch = global.config.useFetch();
	const handle = {
		set:(key,value)=>{
			dispath({key:'set',payload:{[key]:value}})
		}
	}
	useEffect(function() {
	    Fetch.get({
	          api:"api/category/popular"
	          ,onThen:(result => {
	            handle.set("datas",result.data ?? []);
	        }),onError:(error=> {
	            handle.set("datas",[]);
	        }),onStart:(()=>{
	        	handle.set("datas",Array(3).fill(undefined));
	        	handle.set("isLoading",true)
	        }),onEnd:(()=>{
	        	handle.set("isLoading",false)
	        })
	      })
	},[])
	return(
		<PopularContext.Provider value={{state,handle}}>
			{children}
		</PopularContext.Provider>
	)
}
export default memo(PopularProvider);