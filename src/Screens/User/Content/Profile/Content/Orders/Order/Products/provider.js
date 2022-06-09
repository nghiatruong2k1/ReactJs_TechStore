import {memo,createContext,useEffect} from 'react';
import { useFetch } from '../../../../../../../../Config/Fetch/';
export const OrderProductsContext = createContext();
function OrderProductsProvider({state,dispath,orderId,children,...props}){
	const Fetch = useFetch();
	async function handleGetData(onStart, onEnd){
		return await Fetch.get({
	        api:"api/orderdetail/"+orderId,
	        params:{
	        	limit:state.limit,
        		offset:(state.page - 1) * state.limit
	        },onThen:function({data}){
	         	dispath(["set_datas",data])
	        },onError:function(){
	        	dispath(["set_datas",[]])
	        },onStart,onEnd
	    });
	}
	async function handleGetTotal(onStart, onEnd){
		return await Fetch.get({
	        api:"api/orderdetail/count/"+orderId,
	        onThen:function({data}){
	         	dispath(["set_total",data])
	        },onStart,onEnd
	    });
	}
	useEffect(async function(){
	    if(orderId){
		    return await handleGetData(
		      	function(){
		        	dispath(["set_datas",[undefined,undefined]])
		        	dispath(["set_loading",true])
		        },function(){
		        	dispath(["set_loading",false])
		        });     
	    }else{
	      	dispath(["set_datas",[]])
	    }
	},[orderId,state.page])
	useEffect(async function(){
	    if(orderId){
			return await handleGetTotal(
		        function(){
		        	dispath(["set_total",0])
		        });      
	    }else{
	      	dispath(["set_total",0])
	    }
	},[orderId,state.limit]);
	return(
		<OrderProductsContext.Provider value={{
			state,dispath
		}}>
			{children}
		</OrderProductsContext.Provider>
	)
}
export default memo(OrderProductsProvider);