import {memo,useState,createContext,useEffect} from 'react';
import clsx from 'clsx';
import useLoading from "./Control/Loading/";
import useUploadImage from "./Control/UploadImage/";
import useToast from "./Control/Toast/";
import useAuth from "./Control/Auth/";
function AppProvider({children,...props}){
	const AppContext = global.config.context;
	const loading = useLoading();
	const uploadImage = useUploadImage();
	const toast = useToast();
	const auth = useAuth();
	return(
		<AppContext.Provider value={{
			loading,uploadImage,toast,auth
		}}>
			{children}
		</AppContext.Provider>
	)
}
export default memo(AppProvider);