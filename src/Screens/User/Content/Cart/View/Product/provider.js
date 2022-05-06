import {memo,createContext,useEffect,useContext} from 'react';
import { useFetch } from '../../../../../../Config/Fetch/';
export const ItemContext = createContext();
function ItemProvider({data,index,state,dispath,children,...props}){
	const {cart} = useContext(global.config.UserContext);
	const Fetch = useFetch();
	useEffect(function(){
 		Fetch.get({
	        api:"api/product/"+data.Id
	        ,onThen:(result => {
	            dispath({key:'set',payload:{data:result.data ?? {}}})
	            cart.handle.setData(index,result.data ?? {});
	        }),onError:(error=> {
	            dispath({key:'set',payload:{data:{}}})
	            cart.handle.setData(index,{});
	        }),onStart:(()=>{
	        	dispath({key:'set',payload:{isLoading:true}})
	        }),onEnd:(()=>{
	        	dispath({key:'set',payload:{isLoading:false}})
	        })
	    })
	},[data.Id])
	return(
		<ItemContext.Provider value={{
			data,state,index
		}}>
			{children}
		</ItemContext.Provider>
	)
}
export default memo(ItemProvider);