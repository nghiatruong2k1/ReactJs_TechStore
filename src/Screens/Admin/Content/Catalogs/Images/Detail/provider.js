import {memo,createContext,useContext,useState} from 'react';
export const DetailDataContext = createContext({});
export const DetailContext = createContext({});
function DetailProvider({children,...props}){
	const {data} = useContext(DetailDataContext);
 	const handleData = {
		get:function(key,init){
			return data.get[key] ?? init;
		},
		set:function(key,value){
			data.set(function(prevData){
				return{
					...prevData,
					[key]:value
				}
			})
		}
	}
	return(
		<DetailContext.Provider value={{
			data:{get:data.get,handle:handleData},
			datas:{handle:data.handle}
		}}>
			{children}
		</DetailContext.Provider>
	)
}
export default memo(DetailProvider);