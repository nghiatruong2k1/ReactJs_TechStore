import {memo,createContext,useEffect} from 'react';
export const ListContext = createContext({});
function ListProvider({state,dispath,action,children,...props}){
	const handle = {
		set:(key,value)=>{
			dispath({key:'set',payload:{[key]:value}})
		}
	}
  	const Fetch = global.config.useFetch();
	useEffect(function() {
	    Fetch.get({
	        api:"api/"+action
	        ,onThen:(result => {
	            handle.set("datas",result.data ?? []);
	        }),onError:(error=> {
	            handle.set("datas",[]);
	        }),onStart:(()=>{
	        	handle.set("datas",Array(4).fill(undefined));
	        	handle.set("isLoading",true)
	        }),onEnd:(()=>{
	        	handle.set("isLoading",false)
	        })
	    })
	},[action])
	return(
		<ListContext.Provider value={{
			state,handle,action
		}}>
			{children}
		</ListContext.Provider>
	)
}
export default memo(ListProvider);