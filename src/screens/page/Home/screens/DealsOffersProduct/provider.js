import {memo,createContext,useContext} from 'react';
export const DealsOffersContext = createContext({});
export const useGetDealsOffersContext = ()=>{
	return useContext(DealsOffersContext);
}
function DealsOffersProvider({children,value}){
	return (
		<DealsOffersContext.Provider value={value}>
			{children}
		</DealsOffersContext.Provider>
	)
};export default memo(DealsOffersProvider)