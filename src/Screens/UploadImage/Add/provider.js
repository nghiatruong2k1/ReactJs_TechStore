import {createContext, memo,useState} from 'react';
import {useFetch} from "../../../Config/Fetch/";
export const AddImageContext = createContext();
function AddImageProvider({state,dispath,children,...props}){
	const Fetch = useFetch();
	const handle = {
		refetch:function(){
			dispath(['clear'])
		},save:function(data){
			const {IsPubic,IsTrash,Name,Size,Url} = data;
			Fetch.post({
		      api:"api/admin/image/"
		      ,params:{IsPubic,IsTrash,Name,Size,Url},
		      onThen:function(result){
				dispath(['remove',data])
		      }
		    })
		}
	}
	return(
		<AddImageContext.Provider value={{
			state,dispath,handle
		}}>
			{children}
		</AddImageContext.Provider>
	)
}
export default memo(AddImageProvider);