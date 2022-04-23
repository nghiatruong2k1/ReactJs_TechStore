import {memo,createContext} from 'react';
export const ListContext = createContext();
function ListProvider({children,displays,...props}){
	return(
		<ListContext.Provider value={{displays:displays ?? [],...props}}>
			{children}
		</ListContext.Provider>
	)
}
export default memo(ListProvider);