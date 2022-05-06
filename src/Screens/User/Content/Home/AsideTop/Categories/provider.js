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
				dispath({key:'set',payload:{datas:result.data ?? []}})
	        }),onError:(error=> {
	            dispath({key:'set',payload:{datas:[]}})
	        }),onStart:(()=>{
				dispath({key:'set',payload:{datas:Array(5).fill(undefined)}})
				dispath({key:'set',payload:{isLoading:true}})
	        }),onEnd:(()=>{
				dispath({key:'set',payload:{isLoading:false}})
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