import {memo,createContext,useEffect} from 'react';
export const CategoryContext = createContext();
function CategoryProvider({state,dispath,children,...props}){
	const Fetch = global.config.useFetch();
	const handle = {
		set:(key,value)=>{
			dispath({key:'set',payload:{[key]:value}})
		}
	}
	useEffect(function() {
	    Fetch.get({
	          api:"api/category"
	          ,onThen:(result => {
	            handle.set("datas",result.data ?? []);
	        }),onError:(error=> {
	            handle.set("datas",[]);
	        }),onStart:(()=>{
	        	handle.set("datas",Array(5).fill(undefined));
	        	handle.set("isLoading",true)
	        }),onEnd:(()=>{
	        	handle.set("isLoading",false)
	        })
	      })
	},[])
	return(
		<CategoryContext.Provider value={{state,handle}}>
			{children}
		</CategoryContext.Provider>
	)
}
export default memo(CategoryProvider);