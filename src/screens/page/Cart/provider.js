import {memo,createContext,useContext} from 'react';
export const CartContext = createContext();
export const useGetCartContext = ()=>{
    return useContext(CartContext);
}
function CartProvider({children,value}){
    return (
        <CartContext.Provider value={value}>
            {children}
        </CartContext.Provider>
    )
};export default memo(CartProvider)