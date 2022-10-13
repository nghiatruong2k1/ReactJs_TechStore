import {memo,createContext,useContext} from 'react';

export const SearchContext = createContext();
export const useGetSearchContext = ()=>{
	return useContext(SearchContext);
}
function SearchProvider({children,value}){
	return (
		<SearchContext.Provider value={value}>
			{children}
		</SearchContext.Provider>
	)
};export default memo(SearchProvider)