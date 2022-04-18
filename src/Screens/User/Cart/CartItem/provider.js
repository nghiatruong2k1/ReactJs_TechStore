import {memo,createContext,useEffect,useContext} from 'react';
export const ItemContext = createContext();
function ItemProvider({data,index,state,dispath,children,...props}){
	const {cart} = useContext(global.config.UserContext);
	const Fetch = global.config.useFetch();
	useEffect(function(){
 		Fetch.get({
	        api:"api/product/"+data.Id
	        ,onThen:(result => {
	            dispath({key:'set',payload:{data:result.data ?? {}}})
	            cart.handle.setPrice(index,result.data.Price,result.data.SalePrice);
	        }),onError:(error=> {
	            dispath({key:'set',payload:{data:{}}})
	            cart.handle.setPrice(index,);
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