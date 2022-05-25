
import {memo,createContext,useEffect,useMemo} from 'react';
export const ListContext = createContext();


function ListProvider({state,dispath,controller,action,children,...props}){
	return(
		<ListContext.Provider value={{state,dispath,controller}}>
			{children}
		</ListContext.Provider>
	)
}
export default memo(ListProvider);