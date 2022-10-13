import {memo,createContext,useContext, useEffect} from 'react';
import { initCase } from './init';
export const ListContext = createContext();
export const useGetListContext = ()=>{
    return useContext(ListContext);
}
function ListProvider({children,value:{controller,handleGetData,state,dispath}}){
    useEffect(() => {
		dispath([ initCase.SET_DATA])
		dispath([ initCase.SET_LOADING,true])
		const ourRequest = handleGetData(
		  (data) => {
			dispath([ initCase.SET_DATA,data])
			dispath([ initCase.SET_LOADING,false])
		  }
		);
		return ourRequest;
	  }, [controller]);
    return (
        <ListContext.Provider value={{state,dispath}}>
            {children}
        </ListContext.Provider>
    )
};export default memo(ListProvider)