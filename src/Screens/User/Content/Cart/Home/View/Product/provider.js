import {memo,createContext,useEffect,useContext} from 'react';
import { useFetch } from '../../../../../../../Config/Fetch';
export const ItemContext = createContext();
function ItemProvider({data,index,children,...props}){
	return(
		<ItemContext.Provider value={{
			data,index
		}}>
			{children}
		</ItemContext.Provider>
	)
}
export default memo(ItemProvider);