import { array } from 'prop-types';
import {memo,useState,useMemo,createContext,useEffect} from 'react';
import {useFetch} from "../../../../../../../Config/Fetch/"

import {getInitData,types} from "./init";


export const OrdersContext = createContext();


function OrdersProvider({state,dispath,children,...props}){
	const Fetch = useFetch();
	useEffect(async function(){
		const gstatic = await Fetch.get({
			api:"api/admin/order/statistic",
			onThen:function({data}){
				dispath(['set_datas',data])
			},onError:function(){
				dispath(['set_datas'])
			}
		});
		const gstatus = await Fetch.get({
			api:"api/orderstatus",
			onThen:function({data}){
				dispath(['set_status',data])
			},onError:function(){
				dispath(['set_status'])
			}
		});
		return function(){
			gstatus();
			gstatic();
		}
	},[])
	return(
		<OrdersContext.Provider value={{
			state,dispath
		}}>
			{children}
		</OrdersContext.Provider>
	)
}
export default memo(OrdersProvider);