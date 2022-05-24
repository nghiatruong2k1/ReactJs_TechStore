import {memo,createContext} from 'react';
export const SearchContext = createContext({});
function SearchProvider({state,dispath,children,...props}){
	return(
		<SearchContext.Provider value={{state,dispath}}>
			{children}
		</SearchContext.Provider>
	)
}
export default memo(SearchProvider);