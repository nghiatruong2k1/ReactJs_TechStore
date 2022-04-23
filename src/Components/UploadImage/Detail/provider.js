import {memo,createContext,useContext} from 'react';
export const DetailDataContext = createContext({});
export const DetailContext = createContext({});
function DetailProvider({children,...props}){
	const {data,handle,setData} = useContext(DetailDataContext);
	return(
		<DetailContext.Provider value={{
			data,handle:{
				...handle
				,set:function(key,value){
					setData(function(prevData){
						return{
							...prevData,
							[key]:value
						}
					})
				},get:function(key,init){
					return data[key] ?? init;
				}
			}
		}}>
			{children}
		</DetailContext.Provider>
	)
}
export default memo(DetailProvider);