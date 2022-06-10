import {memo,createContext,useContext,useEffect} from 'react';
import {useCookies} from "react-cookie";
import { useFetch } from '../../../../../../Config/Fetch/';
export const OrdersContext = createContext();

const bodyRoot = document.getElementById("root");
function OrdersProvider({state,dispath,children,...props}){
	const Fetch = useFetch();
	const {auth} = useContext(global.config.AppContext);
	async function handleGetData(onStart, onEnd){
		const status = state.status[state.statusIndex];
		if(status){
			return await Fetch.get({
				api:"api/order",
				params:{
					statusId:status.Id,
					limit:state.limit,
					offset:(state.page - 1) * state.limit
				},onThen:function({data}){
					 dispath(["set_datas",data])
				},onError:function(){
					dispath(["set_datas",[]])
				},onStart,onEnd
			});
		}
	}
	async function handleGetTotal(onStart, onEnd){
		const status = state.status[state.statusIndex];
		if(status){
			return await Fetch.get({
				api:"api/order/count"
				,params:{
					statusId:status.Id
				}
				,onThen:function({data}){
					 dispath(["set_total",data])
				},onStart,onEnd
			});
		}
	}
	useEffect(async function(){
		bodyRoot.scrollTop = 0;
	    if(auth.state.user){
		    return await handleGetData(
		      	function(){
		        	dispath(["set_datas",[undefined]])
		        	dispath(["set_loading",true])
		        },function(){
		        	dispath(["set_loading",false])
		        });     
	    }else{
	      	dispath(["set_datas",[]])
	    }
	},[auth.state.user,state.page,state.statusIndex])
	useEffect(async function(){
	    if(auth.state.user){
			return await handleGetTotal(
		        function(){
		        	dispath(["set_total",0])
		        });      
	    }else{
	      	dispath(["set_total",0])
	    }
	},[auth.state.user,state.limit,state.statusIndex]);
	return(
		<OrdersContext.Provider value={{
			state,dispath,handle:{
				refetch:function(){
					handleGetData();
					handleGetTotal();
				}
			}
		}}>
			{children}
		</OrdersContext.Provider>
	)
}
export default memo(OrdersProvider);