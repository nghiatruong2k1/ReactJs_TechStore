import {memo,createContext,useContext,useState,useEffect} from 'react';
import {useParams} from 'react-router-dom';
import {DetailDataContext} from "../Detail/provider";
import { useGet } from '../../../config/Fetch';
function UpdateProvider({id,children,...props}){
	async function handleGetData(){
		return await Fetch.get({
	      api:"api/admin/image/"+params.id
	      ,onThen:(result => {
	          dispath(['set_data',result.data])
	      }),onError:(error=> {
	          setData(['set_data']);
	      }),onS
	    })
	}
	async function handlePutData(){
		return await Fetch.put({
	      api:"api/admin/image/"
	      ,params:{...data}
	    })
	}
	const handle = {
		get:handleGetData,
		save:handlePutData
	}
	useEffect(async function(){
	    return await handleGetData();
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