// 	async function handleGetData(onStart, onEnd){
// 		return await Fetch.get({
// 	        api:"api/orderdetail/"+orderId,
// 	        params:{
// 	        	limit:state.limit,
//         		offset:(state.page - 1) * state.limit
// 	        },onThen:function({data}){
// 	         	dispath(["set_datas",data])
// 	        },onError:function(){
// 	        	dispath(["set_datas",[]])
// 	        },onStart,onEnd
// 	    });
// 	}
// 	async function handleGetTotal(onStart, onEnd){
// 		return await Fetch.get({
// 	        api:"api/orderdetail/count/"+orderId,
// 	        onThen:function({data}){
// 	         	dispath(["set_total",data])
// 	        },onStart,onEnd
// 	    });
// 	}

import { memo, createContext, useContext, useEffect } from 'react';
import { initCase } from './init';
import { OrderServices } from '~/services';
export const OrderProductsContext = createContext();
export const useGetOrderProductsContext = () => {
  return useContext(OrderProductsContext);
};
function OrderProductsProvider({
  value: { state, dispath, OrderId },
  children,
}) {
  const orderServices = OrderServices('order item products');
  useEffect(() => {
    dispath([initCase.SET_PAGE]);
    return orderServices.getCountByDetail(OrderId, (data) => {
      dispath([initCase.SET_TOTAL, data]);
    });
  }, [OrderId]);
  useEffect(() => {
    dispath([initCase.SET_DATA]);
    dispath([initCase.SET_LOADING, true]);
    return orderServices.getsByDetail(
      OrderId,
      {
        offset: (state.page - 1) * state.limit,
        limit: state.limit,
      },
      (data) => {
        dispath([initCase.SET_DATA, data]);
        dispath([initCase.SET_LOADING, false]);
      },
    );
  }, [OrderId, state.limit, state.page]);
  return (
    <OrderProductsContext.Provider
      value={{
        state,
        dispath,
      }}
    >
      {children}
    </OrderProductsContext.Provider>
  );
}
export default memo(OrderProductsProvider);
