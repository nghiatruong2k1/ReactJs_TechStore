import {memo,createContext} from 'react';
export const OrderContext = createContext();
function OrderProvider({children,loading,data,...props}){
	return(
		<OrderContext.Provider value={{loading,data}}>
			{children}
		</OrderContext.Provider>
	)
}
export default memo(OrderProvider);