import {memo,createContext,useContext,useState,useEffect} from 'react';
import {useParams} from 'react-router-dom';
import {DetailDataContext} from "../Detail/provider";
function UpdateProvider({children,...props}){
	const [data,setData] = useState({});
	const Fetch = global.config.useFetch();
	const params = useParams();
	function handleGetData(){
		Fetch.get({
	      api:"api/admin/image/"+params.id
	      ,onThen:(result => {
	          setData(result.data.Value[0]);
	      }),onError:(error=> {
	          setData({})
	      })
	    })
	}
	function handlePutData(){
		Fetch.put({
	      api:"api/admin/image/"
	      ,params:{...data}
	    })
	}
	const handle = {
		get:handleGetData,
		save:handlePutData
	}
	useEffect(function(){
	    handle.get();
	},[params.id]);
	return(
		<DetailDataContext.Provider value={{
			data:{get:data,set:setData,handle}
		}}>
			{children}
		</DetailDataContext.Provider>
	)
}
export default memo(UpdateProvider);