import {memo,createContext,useContext} from 'react';
export const GlobalLoadingContext = createContext();
export const useGetGlobalLoadingContext = ()=>{
    return useContext(GlobalLoadingContext);
}
function GlobalLoadingProvider({children,value}){
    return (
        <GlobalLoadingContext.Provider value={value}>
            {children}
        </GlobalLoadingContext.Provider>
    )
};export default memo(GlobalLoadingProvider)