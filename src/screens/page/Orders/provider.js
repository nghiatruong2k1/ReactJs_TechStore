import { memo, createContext, useContext, useEffect, useMemo } from 'react';
import { OrderServices } from '~/services';
import { initCase } from './init';
export const OrdersContext = createContext();
function OrdersProvider({ value: { state, dispath }, children }) {
  const orderServices = OrderServices('Orders page');
  // async function handleGetData(onStart, onEnd){
  // 	const status = state.status[state.statusIndex];
  // 	if(status){
  // 		return await Fetch.get({
  // 			api:"api/order",
  // 			params:{
  // 				statusId:status.Id,
  // 				limit:state.limit,
  // 				offset:(state.page - 1) * state.limit
  // 			},onThen:function({data}){
  // 				 dispath(["set_datas",data])
  // 			},onError:function(){
  // 				dispath(["set_datas",[]])
  // 			},onStart,onEnd
  // 		});
  // 	}
  // }
  // async function handleGetTotal(onStart, onEnd){
  // 	const status = state.status[state.statusIndex];
  // 	if(status){
  // 		return await Fetch.get({
  // 			api:"api/order/count"
  // 			,params:{
  // 				statusId:status.Id
  // 			}
  // 			,onThen:function({data}){
  // 				 dispath(["set_total",data])
  // 			},onStart,onEnd
  // 		});
  // 	}
  // }
  const statusId = useMemo(() => {
    return state.status[state.statusIndex]?.Id || 0;
  }, [state.status, state.statusIndex]);
  useEffect(() => {
    dispath([initCase.SET_STATUS]);
    dispath([initCase.SET_STATUS_INDEX]);
    const ourRequest = orderServices.getsStatus((data) => {
      dispath([initCase.SET_STATUS, data]);
    });
    return ourRequest;
  }, []);
  useEffect(() => {
    dispath([initCase.SET_DATA]);
    dispath([initCase.SET_LOADING, true]);
    const ourRequest = orderServices.getAll(
      {
        StatusId: statusId,
        limit: state.limit,
        offset: (state.page - 1) * state.limit,
      },
      (data) => {
        dispath([initCase.SET_DATA, data]);
        dispath([initCase.SET_LOADING, false]);
      },
    );
    return ourRequest;
  }, [state.page, state.limit, statusId]);
  useEffect(() => {
    dispath([initCase.SET_PAGE]);
    const ourRequest = orderServices.getCount(
      { StatusId: statusId },
      (data) => {
        dispath([initCase.SET_TOTAL, data]);
      },
    );
    return ourRequest;
  }, [state.limit, statusId]);
  return (
    <OrdersContext.Provider value={{ state, dispath }}>
      {children}
    </OrdersContext.Provider>
  );
}
export default memo(OrdersProvider);
