import {memo,createContext,useMemo,useEffect} from 'react';
export const ItemContext = createContext();
function ItemProvider({data,onChange,children}){
    const isLoading = useMemo(function(){
        return data.loaded < data.Size
    },[data.loaded,data.Size])
    return (
        <ItemContext.Provider value={{data,onChange,isLoading}}>
            {children}
        </ItemContext.Provider>
    )
};export default memo(ItemProvider)