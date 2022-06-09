import {memo,createContext,useEffect} from 'react';
import {useFetch} from "../../../../../../../Config/Fetch/";

export const OrdersContext = createContext();


function OrdersProvider({state,dispath,children,...props}){
	const Fetch = useFetch();
	useEffect(async function(){
		return await Fetch.get({
			api:"api/admin/user/statistic",
			onThen:function({data}){
				dispath(['set_datas',data])
			},onError:function(){
				dispath(['set_datas'])
			}
		});
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