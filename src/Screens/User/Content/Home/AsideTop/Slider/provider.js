import {memo,createContext} from 'react';
export const SliderContext = createContext();
function SliderProvider({state,dispath,slider,children,...props}){
	return(
		<SliderContext.Provider value={{
			state,dispath,slider
		}}>
			{children}
		</SliderContext.Provider>
	)
}
export default memo(SliderProvider);