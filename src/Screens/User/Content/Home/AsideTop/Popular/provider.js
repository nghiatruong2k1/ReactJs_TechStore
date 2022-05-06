import {memo,createContext,useEffect} from 'react';
import {useFetch} from "../../../../../../Config/Fetch/";
export const PopularContext = createContext();
function PopularProvider({state,dispath,children,...props}){
	const Fetch = useFetch();
	const handle = {
		set:(key,value)=>{
			dispath({key:'set',payload:{[key]:value}})
		}
	}
	useEffect(function() {
	    Fetch.get({
	        api:"api/category/popular"
			,onThen:(result => {
				dispath({key:'set',payload:{datas:result.data ?? []}})
	        }),onError:(error=> {
	            dispath({key:'set',payload:{datas:[]}})
	        }),onStart:(()=>{
				dispath({key:'set',payload:{datas:Array(3).fill(undefined)}})
				dispath({key:'set',payload:{isLoading:true}})
	        }),onEnd:(()=>{
				dispath({key:'set',payload:{isLoading:false}})
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