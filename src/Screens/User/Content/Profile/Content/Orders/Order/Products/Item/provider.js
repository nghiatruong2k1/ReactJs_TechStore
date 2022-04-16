import {memo,createContext} from 'react';
export const ItemContext = createContext();
function ItemProvider({data,children,...props}){
	return(
		<ItemContext.Provider value={{data}}>
			{children}
		</ItemContext.Provider>
	)
}
export default memo(ItemProvider);