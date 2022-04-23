import {memo,createContext} from 'react';
export const OptionContext = createContext();
function OptionProvider({children,state,handle,...props}){
	return(
		<OptionContext.Provider value={{state,handle}}>
			{children}
		</OptionContext.Provider>
	)
}
export default memo(OptionProvider);