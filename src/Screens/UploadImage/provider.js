import {memo,createContext,useContext} from "react";
export const UploadImageContext = createContext();
function UploadImageProvider({state,dispath,children}){
  const {image} = useContext(global.config.AppContext);
  const handle = {
    close:function(){
      image.handle.close();
      dispath(['clear']);
    },cancel:function(){
      image.config.onCanel && image.config.onCancel({});
    },submit:function(){
      image.config.onSubmit && image.config.onSubmit({value:state.select});
    },select:function(item){
      dispath(['set_select',item])
    }
  }
  return (
  	<UploadImageContext.Provider 
      value={{state,dispath,handle}}
    >
		  {children}
  	</UploadImageContext.Provider>
  )
}
export default memo(UploadImageProvider);