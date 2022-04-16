import {memo,useState,createContext,useContext} from 'react';
import {DetailDataContext} from "../Detail/provider";
function AddProvider({children,...props}){
	const [data,setData] = useState({});
	const Fetch = global.config.useFetch();
	const handle = {
		refetch:function(){
			setData({});
		},save:function(){
			Fetch.post({
		      api:"api/admin/image/"
		      ,params:{...data}
		    })
		}
	}
	return(
		<DetailDataContext.Provider value={{
			data:{...data},handle,setData
		}}>
			{children}
		</DetailDataContext.Provider>
	)
}
export default memo(AddProvider);