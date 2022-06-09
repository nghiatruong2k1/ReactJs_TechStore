import {memo,useEffect,createContext} from 'react';
import {useFetch} from "../../../../../Config/Fetch/";
export const DealContext = createContext({});
function DealProvider({state,dispath,children,...props}){
  	const Fetch = useFetch();
	useEffect(async function() {
	    return await Fetch.get({
	        api:"api/product/type/1",
	        onThen:(result => {
	            dispath(["set_datas",result.data]);
	        }),onError:(error=> {
	            dispath(["set_datas",[]]);
	        }),onStart:(()=>{
	        	dispath(["set_datas",Array(5).fill(undefined)]);
	        	dispath(["set_loading",true])
	        }),onEnd:(()=>{
	        	dispath(["set_loading",false])
	        })
	    })
	},[])
	return(
		<DealContext.Provider value={{state,dispath}}>
			{children}
		</DealContext.Provider>
	)
}
export default memo(DealProvider);