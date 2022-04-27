import {memo,createContext} from 'react';
export const RowDataContext = createContext();
function RowDataProvider({data,loading,children,...props}){
	return(
		<RowDataContext.Provider value={{data,loading}}>
			{children}
		</RowDataContext.Provider>
	)
}
export default memo(RowDataProvider);