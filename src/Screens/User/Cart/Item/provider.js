import {memo,createContext} from 'react';
export const ItemContext = createContext();
function ItemProvider({children,data,index,...props}){
	return(
		<ItemContext.Provider value={{data,index}}>
			{children}
		</ItemContext.Provider>
	)
}
export default memo(ItemProvider);