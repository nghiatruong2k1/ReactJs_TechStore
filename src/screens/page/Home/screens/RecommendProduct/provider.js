import {memo,useEffect,createContext,useContext} from 'react';
import ProductServices from '~/services/product';
import { initCase } from './init';
export const RecommendContext = createContext({});
export const useGetRecommendContext = ()=>{
	return useContext(RecommendContext);
}
function RecommendProvider({children,value}){
	const productServices = ProductServices('home recommend product');
	useEffect(() => {
		value.dispath([ initCase.SET_DATA])
		value.dispath([ initCase.SET_LOADING,true])
		const ourRequest = productServices.getsRecommend(
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
		<RecommendContext.Provider value={value}>
			{children}
		</RecommendContext.Provider>
	)
};export default memo(RecommendProvider)