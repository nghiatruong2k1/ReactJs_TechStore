import {memo,createContext,useContext} from 'react';
export const ListContext = createContext();
export const useGetListContext = ()=>{
    return useContext(ListContext);
}
function ListProvider({children,value}){
    return (
        <ListContext.Provider value={value}>
            {children}
        </ListContext.Provider>
    )
};export default memo(ListProvider)