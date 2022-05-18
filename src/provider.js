import {memo,useState,createContext,useEffect} from 'react';
import clsx from 'clsx';
import useLoading from "./Control/Loading/";
import useToast from "./Control/Toast/";

const GlobalContext = global.config.context;
function GlobalProvider({children,...props}){
	const loading = useLoading();
	const toast = useToast();
	return(
		<GlobalContext.Provider value={{
			loading,toast
		}}>
			{children}
		</GlobalContext.Provider>
	)
}
export default memo(GlobalProvider);