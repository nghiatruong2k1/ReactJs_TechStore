import {memo,useEffect,createContext,useContext} from 'react';
import ProductServices from '~/services/product';
import { initCase } from './init';
export const DealsOffersContext = createContext({});
export const useGetDealsOffersContext = ()=>{
	return useContext(DealsOffersContext);
}
function DealsOffersProvider({children,value}){
	const productServices = ProductServices('home deal offers product');
	useEffect(() => {
		value.dispath([ initCase.SET_DATA])
		value.dispath([ initCase.SET_LOADING,true])
		const ourRequest = productServices.getsDealsOffers(
		  {
			limit:value.state.limit ?? 1,
	        offset:0
		  },
		  (data) => {
			value.dispath([ initCase.SET_DATA,data])
			value.dispath([ initCase.SET_LOADING,false])
		  }
		);
		return ourRequest;
	  }, []);
	return (
		<DealsOffersContext.Provider value={value}>
			{children}
		</DealsOffersContext.Provider>
	)
};export default memo(DealsOffersProvider)