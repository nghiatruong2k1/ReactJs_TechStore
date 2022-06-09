import {memo,useEffect,createContext} from 'react';
import {useFetch} from "../../../../../Config/Fetch/";
export const RecommendContext = createContext({});
function RecommendProvider({state,dispath,children,...props}){
	const handle = {
		set:(key,value)=>{
			dispath(['set',{[key]:value}])
		}
	}
  	const Fetch = useFetch();
	useEffect(async function() {
	    return await Fetch.get({
	        api:"api/product/type/2",
	        params:{
	        	limit:state.limit ?? 1,
	        	offset:0
	        },onThen:(result => {
	            dispath(["set_datas",result.data]);
	        }),onError:(error=> {
	            dispath(["set_datas",[]]);
	        }),onStart:(()=>{
	        	dispath(["set_datas",Array(state.limit ?? 1).fill(undefined)]);
	        	dispath(["set_loading",true])
	        }),onEnd:(()=>{
	        	dispath(["set_loading",false])
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