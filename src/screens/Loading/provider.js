import {memo,createContext} from 'react';
export const LoadingContext = createContext();
function LoadingProvider({children,value}){
    return (
        <LoadingContext.Provider value={value}>
            {children}
        </LoadingContext.Provider>
    )
};export default memo(LoadingProvider)