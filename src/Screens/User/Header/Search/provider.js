import {memo,createContext,useState} from 'react';
export const SearchContext = createContext({});
function SearchProvider({state,dispath,children,...props}){
	const handle = {
		set:(key,value)=>{
			dispath({key:'set',payload:{[key]:value}})
		}
	}
	return(
		<SearchContext.Provider value={{state,handle}}>
			{children}
		</SearchContext.Provider>
	)
}
export default memo(SearchProvider);