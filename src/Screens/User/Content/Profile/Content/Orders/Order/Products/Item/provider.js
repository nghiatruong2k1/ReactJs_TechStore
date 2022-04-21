import {memo,createContext} from 'react';
export const ItemContext = createContext();
function ItemProvider({data,loading,children,...props}){
	return(
		<ItemContext.Provider value={{data,loading}}>
			{children}
		</ItemContext.Provider>
	)
}
export default memo(ItemProvider);