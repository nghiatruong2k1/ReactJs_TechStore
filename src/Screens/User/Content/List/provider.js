import {memo,createContext,useEffect} from 'react';
export const ListContext = createContext({});
function ListProvider({state,dispath,controller,action,children,...props}){
	const handle = {
		set:(key,value)=>{
			dispath({key:'set',payload:{[key]:value}})
		}
	}
  	const Fetch = global.config.useFetch();
	useEffect(function() {
	    Fetch.get({
	        api:"api/"+controller
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
	},[controller])
	return(
		<ListContext.Provider value={{
			state,handle,controller
		}}>
			{children}
		</ListContext.Provider>
	)
}
export default memo(ListProvider);