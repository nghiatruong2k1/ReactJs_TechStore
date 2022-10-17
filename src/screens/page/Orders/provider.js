import { memo, createContext} from 'react';
export const OrdersContext = createContext();
function OrdersProvider({ value: { state, dispath }, children }) {
  return (
    <OrdersContext.Provider value={{ state, dispath }}>
      {children}
    </OrdersContext.Provider>
  );
}
export default memo(OrdersProvider);
