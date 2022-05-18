import {memo,createContext} from 'react';
import useAuth from "./Control/Auth/";
import useUploadImage from "./Screens/UploadImage/Hook/";

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