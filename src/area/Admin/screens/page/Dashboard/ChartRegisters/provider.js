import {memo,createContext,useContext,useEffect} from 'react';
import UserAdminServices from '~/area/Admin/services/userAdmin';
import { initCase } from './init';
export const ChartRegistersContext = createContext();

export const useGetChartRegistersContext = ()=>{
	return useContext(ChartRegistersContext);
}
function ChartRegistersProvider({state,dispath,children}){
	const userAdminServices = UserAdminServices()
	useEffect(() => {
		dispath([initCase.SET_DATA]);
		dispath([initCase.SET_LOADING, true]);
		return userAdminServices.getStatistic((data) => {
			dispath([initCase.SET_DATA, data]);
			dispath([initCase.SET_LOADING, false]);
		  })
	  }, []);
	return(
		<ChartRegistersContext.Provider value={{
			state,dispath
		}}>
			{children}
		</ChartRegistersContext.Provider>
	)
}
export default memo(ChartRegistersProvider);