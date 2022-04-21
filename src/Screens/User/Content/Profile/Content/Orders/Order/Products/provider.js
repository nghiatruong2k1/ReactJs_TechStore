import {memo,createContext,useEffect} from 'react';
export const OrderProductsContext = createContext();
function OrderProductsProvider({state,dispath,orderId,children,...props}){
	const Fetch = global.config.useFetch();
	function getData(){
		orderId && Fetch.get({
	        api:"api/orderdetail/"+orderId
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
	}
	function getTotal(){
		orderId && Fetch.get({
	        api:"api/orderdetail/count/"+orderId
	        ,onThen:(result => {
	            dispath({key:'set',payload:{total:result.data ?? 0}})
	        }),onError:(error=> {
	            dispath({key:'set',payload:{total:0}})
	        })
	    })
	}
	useEffect(function(){
 		getData();
 		getTotal();
	},[orderId])
	return(
		<OrderProductsContext.Provider value={{
			state
		}}>
			{children}
		</OrderProductsContext.Provider>
	)
}
export default memo(OrderProductsProvider);