import {createContext} from "react";
export const UploadImageContext = createContext();
function UploadImageProvider({state,handle,children,onSubmit,onCancel,defaultData,...props}){
  return (
  	<UploadImageContext.Provider value={{state,handle,onSubmit,onCancel,defaultData}}>
		{children}
  	</UploadImageContext.Provider>
  )
}
export default UploadImageProvider;