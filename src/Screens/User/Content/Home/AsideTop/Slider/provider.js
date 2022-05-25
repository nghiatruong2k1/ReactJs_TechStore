import {memo,createContext} from 'react';
export const SliderContext = createContext();
function SliderProvider({state,dispath,children,...props}){
	return(
		<SliderContext.Provider value={{
			state,dispath
		}}>
			{children}
		</SliderContext.Provider>
	)
}
export default memo(SliderProvider);