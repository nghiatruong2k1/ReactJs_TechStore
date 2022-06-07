import {memo,createContext} from 'react';
export const CartContext = createContext();
function CartProvider({state,dispath,children,...props}){
	return(
		<CartContext.Provider value={{
			state,dispath
		}}>
			{children}
		</CartContext.Provider>
	)
}
export default memo(CartProvider);