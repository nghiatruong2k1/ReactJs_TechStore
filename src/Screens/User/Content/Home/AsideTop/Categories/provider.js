import {memo,createContext,useEffect} from 'react';
import {useFetch} from "../../../../../../Config/Fetch/";
export const CategoryContext = createContext();
function CategoryProvider({state,dispath,children,...props}){
	const Fetch = useFetch();
	const handle = {
		set:(key,value)=>{
			dispath({key:'set',payload:{[key]:value}})
		}
	}
	useEffect(function() {
	    Fetch.get({
	        api:"api/category"
	        ,onThen:(result => {
	            dispath(['set_data',result.data])
	        }),onError:(error=> {
	            dispath(['set_data'])
	        }),onStart:(()=>{
	    		dispath(['set_data',Array(state.limit ?? 4).fill(undefined)])
	    		dispath(['set_loading',true])
	        }),onEnd:(()=>{
	        	dispath(['set_loading',false])
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