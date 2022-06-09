import {memo,useEffect,createContext} from 'react';
import {useFetch} from "../../../../../Config/Fetch/";
export const BrandsContext = createContext({});
function BrandsProvider({state,dispath,slider,children,...props}){
  	const Fetch = useFetch();
	useEffect(async function() {
	   	return await Fetch.get({
	        api:"api/brand"
	        ,onThen:(result => {
	            dispath(['set_data',result.data])
	        }),onError:(error=> {
	            dispath(['set_data'])
	        }),onStart:(()=>{
	    		dispath(['set_data',Array(8).fill(undefined)])
	    		dispath(['set_loading',true])
	        }),onEnd:(()=>{
	        	dispath(['set_loading',false])
	        })
	    })
	},[])
	return(
		<BrandsContext.Provider value={{state,dispath,slider}}>
			{children}
		</BrandsContext.Provider>
	)
}
export default memo(BrandsProvider);