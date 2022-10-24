import {memo,createContext,useContext} from 'react';
export const InputFileContext = createContext();
export const useGetInputFileContext = ()=>{
    return useContext(InputFileContext);
}
function InputFileProvider({children,value}){
    return (
        <InputFileContext.Provider value={value}>
            {children}
        </InputFileContext.Provider>
    )
};export default memo(InputFileProvider)