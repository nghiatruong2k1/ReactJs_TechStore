import {memo,createContext,useContext,useState} from 'react';
export const RowDataContext = createContext();
function RowDataProvider({data,children,...props}){
	return(
		<RowDataContext.Provider value={{data}}>
			{children}
		</RowDataContext.Provider>
	)
}
export default memo(RowDataProvider);