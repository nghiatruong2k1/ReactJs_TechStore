import {memo,createContext} from 'react';
export const OrderContext = createContext();
function OrderProvider({children,loading,data,status,...props}){
	return(
		<OrderContext.Provider value={{loading,data,status}}>
			{children}
		</OrderContext.Provider>
	)
}
export default memo(OrderProvider);