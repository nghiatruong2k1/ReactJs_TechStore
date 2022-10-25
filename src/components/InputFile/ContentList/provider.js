import {memo,createContext,useContext} from 'react';
export const ContentListContext = createContext();
export const useGetContentListContext = ()=>{
  return useContext(ContentListContext);
}
function ContentListProvider({children,value}){
  return (
    <ContentListContext.Provider value={value}>
      {children}
    </ContentListContext.Provider>
  )
};export default memo(ContentListProvider)