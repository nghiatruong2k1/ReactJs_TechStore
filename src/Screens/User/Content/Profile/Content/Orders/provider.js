import {memo,createContext,useEffect} from 'react';
import {useCookies} from "react-cookie";
export const OrdersContext = createContext();
function OrdersProvider({state,dispath,children,...props}){
	const Fetch = global.config.useFetch();
	const [cookies,setCookies] = useCookies();
	useEffect(function(){
	    if(Boolean(cookies['token'])){
	      Fetch.get({
	        api:"api/order",
	        params:{
	        	limit:5,
	        	offset:0
	        },
	        onStart:function(){
	        	dispath({key:"set",payload:{datas:[undefined,undefined]}})
	        	dispath({key:"set",payload:{isLoading:true}})
	        },onEnd:function(){
	        	dispath({key:"set",payload:{isLoading:false}})
	        },
	        onThen:function({data,...result}){
	         	dispath({key:"set",payload:{'datas':data ?? []}})
	        }
	      })
	    }else{
	      	dispath({key:"set",payload:{'datas':[]}})
	    }
	},[cookies['token']])
	return(
		<OrdersContext.Provider value={{
			state
		}}>
			{children}
		</OrdersContext.Provider>
	)
}
export default memo(OrdersProvider);