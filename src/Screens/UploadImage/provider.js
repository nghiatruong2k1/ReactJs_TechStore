import {memo,useState,createContext,useContext} from "react";

import useAddImage from "./Add/Control";
export const UploadImageContext = createContext();
function UploadImageProvider({children}){
  const {image} = useContext(global.config.AppContext);
  const addImage = useAddImage();
  const [select,setSelect] = useState(null);
  const handle = {
    close:function(){
      image.handle.close();
      setSelect(null)
    },cancel:function(){
      image.config.onCancel && image.config.onCancel({});
    },submit:function(){
      image.config.onSubmit && image.config.onSubmit({value:select});
    }
  }
  return (
  	<UploadImageContext.Provider 
      value={{select,setSelect,handle,addImage}}
    >
		  {children}
  	</UploadImageContext.Provider>
  )
}
export default memo(UploadImageProvider);