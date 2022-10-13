import {memo,createContext,useContext} from 'react';
export const InfoContext = createContext();
export const useGetInfoContext = ()=>{
    return useContext(InfoContext);
}
function InfoProvider({children,value}){
    return (
        <InfoContext.Provider value={value}>
            {children}
        </InfoContext.Provider>
    )
};export default memo(InfoProvider)