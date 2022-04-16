import {memo,useState,useMemo,createContext} from 'react';
export const OrdersContext = createContext();
function OrdersProvider({children,...props}){
	const [typeChart,setType] = useState(0);
	const datas = useMemo(function(){
		switch (typeChart) {
			case 0:
				return [100,121,122,118,130,141,140,150,145,175]
				break;
			case 1:
				return [10,11,13,14,15,13,17,14,16,15,18,20]
				break;
			case 2:
				return [1,2,3,4,4,4,3]
				break;
			default:
				return []
				break;
		}
	},[typeChart]);
	const labels = useMemo(function(){
		switch (typeChart) {
			case 0:
				return [2013,2014,2015,2016,2017,2018,2019,2020,2021,2022]
				break;
			case 1:
				return ["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"]
				break;
			case 2:
				return ["Monday","Tuesday","Wednesday","Thursday","Friday","Saturday","Sunday"]
				break;
			default:
				return []
				break;
		}
	},[typeChart]);
	return(
		<OrdersContext.Provider value={{
			chart:{get:typeChart,set:setType},datas,labels
		}}>
			{children}
		</OrdersContext.Provider>
	)
}
export default memo(OrdersProvider);