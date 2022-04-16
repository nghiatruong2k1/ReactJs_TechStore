import {memo,createContext,useContext} from 'react';
import {DetailContext} from "../provider";
export const DetailInfoContext = createContext();
function DetailInfoProvider({children,...props}){
	const {data} = useContext(DetailContext);
	return(
		<DetailInfoContext.Provider value={{data}}>
			{children}
		</DetailInfoContext.Provider>
	)
}
export default memo(DetailInfoProvider);