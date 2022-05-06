import {memo,useEffect,createContext} from 'react';
import {useFetch} from "../../../../../Config/Fetch/";
export const BrandsContext = createContext({});
function BrandsProvider({state,dispath,children,...props}){
	const handle = {
		set:(key,value)=>{
			dispath({key:'set',payload:{[key]:value}})
		}
	}
  	const Fetch = useFetch();
	useEffect(function() {
	    Fetch.get({
	        api:"api/brand",
	        params:{
	        	limit:state.limit ?? 1,
	        	offset:0
	        },onThen:(result => {
				dispath({key:'set',payload:{datas:result.data ?? []}})
	        }),onError:(error=> {
	            dispath({key:'set',payload:{datas:[]}})
	        }),onStart:(()=>{
				dispath({key:'set',payload:{datas:Array(state.limit ?? 1).fill(undefined)}})
				dispath({key:'set',payload:{isLoading:true}})
	        }),onEnd:(()=>{
				dispath({key:'set',payload:{isLoading:false}})
	        })
	    })
	},[])
	return(
		<BrandsContext.Provider value={{state,handle}}>
			{children}
		</BrandsContext.Provider>
	)
}
export default memo(BrandsProvider);