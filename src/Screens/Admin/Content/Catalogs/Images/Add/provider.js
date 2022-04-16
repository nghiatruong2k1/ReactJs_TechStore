import {memo,useState,createContext,useContext} from 'react';
import {DetailDataContext} from "../Detail/provider";
function AddProvider({children,...props}){
	const [data,setData] = useState({});
	const Fetch = global.config.useFetch();
	function handlePostData(){
		Fetch.post({
	      api:"api/admin/image/"
	      ,params:{...data}
	    })
	}
	const handle = {
		get:function(){setData({})},
		save:handlePostData
	}
	return(
		<DetailDataContext.Provider value={{
			data:{get:data,set:setData,handle}
		}}>
			{children}
		</DetailDataContext.Provider>
	)
}
export default memo(AddProvider);