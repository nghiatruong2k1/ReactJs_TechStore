import {memo,createContext,useEffect} from 'react';
import { useFetch } from '../../../../../../../Config/Fetch/';

export const SliderContext = createContext();
function SliderProvider({state,dispath,id,setImages,children,...props}){
	const Fetch = useFetch();
	useEffect(async function() {
	    if(id){
			return Fetch.get({
				api:"api/image/product/",
				params:{id}
				,onThen:(result => {
					setImages(result.data);
				}),onError:(error=> {
					setImages();
				}),onStart:(()=>{
					setImages();
					dispath(["set_index",0]);
					dispath(["set_loading",true]);
				}),onEnd:(()=>{
					dispath(["set_loading",false]);
				})
			})
		}
	},[id])
	return(
		<SliderContext.Provider value={{
			state,dispath
		}}>
			{children}
		</SliderContext.Provider>
	)
}
export default memo(SliderProvider);
