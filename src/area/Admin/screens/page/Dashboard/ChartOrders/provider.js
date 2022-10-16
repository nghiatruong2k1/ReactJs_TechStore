import { memo, createContext, useEffect, useContext } from 'react';
import OrderAdminServices from '~/area/Admin/services/orderAdmin';
import { OrderServices } from '~/services';
import { initCase } from './init';

export const ChartOrdersContext = createContext();

export const useGetChartOrdersContext = () => {
  return useContext(ChartOrdersContext);
};
function OrdersProvider({ state, dispath, children }) {
  const orderAdminServices = OrderAdminServices('OrdersProvider');
  const orderServices = OrderServices('OrdersProvider')
  useEffect(() => {
    dispath([initCase.SET_DATA]);
	dispath([initCase.SET_STATUS]);
    dispath([initCase.SET_LOADING, true]);
    const outStatic = orderAdminServices.getStatistic((data) => {
      dispath([initCase.SET_DATA, data]);
      dispath([initCase.SET_LOADING, false]);
    });
	const outStatus = orderServices.getsStatus((data)=>{
		dispath([initCase.SET_STATUS, data]);
	})
    return () => {
      outStatic && outStatic();
	  outStatus && outStatus();
    };
  }, []);
  // 	const gstatus = await Fetch.get({
  // 		api:"api/orderstatus",
  // 		onThen:function({data}){
  // 			dispath(['set_status',data])
  // 		},onError:function(){
  // 			dispath(['set_status'])
  // 		}
  // 	});
  // 	return function(){
  // 		gstatus();
  // 		gstatic();
  // 	}
  //},[])
  return (
    <ChartOrdersContext.Provider
      value={{
        state,
        dispath,
      }}
    >
      {children}
    </ChartOrdersContext.Provider>
  );
}
export default memo(OrdersProvider);
