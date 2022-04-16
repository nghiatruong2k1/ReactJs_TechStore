import {memo,createContext} from 'react';
export const OrderContext = createContext();
function OrderProvider({children,...props}){
	return(
		<OrderContext.Provider value={{...props}}>
			{children}
		</OrderContext.Provider>
	)
}
export default memo(OrderProvider);