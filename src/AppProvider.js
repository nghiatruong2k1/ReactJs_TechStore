import {memo,createContext} from 'react';
import useAuth from "./Screens/Auth/Control/";
import useUploadImage from "./Screens/UploadImage/Control/";

const AppContext = global.config.AppContext;
function AppProvider({children,...props}){
	const auth = useAuth();
	const image = useUploadImage();
	return(
		<AppContext.Provider value={{auth,image}}>
			{children}
		</AppContext.Provider>
	)
}
export default memo(AppProvider);