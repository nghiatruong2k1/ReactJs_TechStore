import {memo,createContext,useState,useEffect} from 'react';
import {useParams,useNavigate} from "react-router-dom";
import { useSnackbar } from "notistack"
import { useFetch } from '../../../../../../Config/Fetch/';
import {getRoute} from "../../../../../../Config/Route/";
export const DetailContext = createContext();
function DetailProvider({state,dispath,children,...props}){
	const navigator = useNavigate();
	const { enqueueSnackbar } = useSnackbar();
	const {alias} = useParams();
  	const Fetch = useFetch();
	useEffect(async function() {
	    if(alias){
			return await Fetch.get({
				api:"api/product/"+alias
				,onThen:(result => {
					dispath(["set_data",result.data]);
				}),onError:(error=> {
					dispath(["set_data"]);
				}),onStart:(()=>{
					dispath(["set_data"]);
					dispath(["set_quantity",1]);
					dispath(["set_loading",true]);
				}),onEnd:(()=>{
					dispath(["set_loading",false]);
				})
			})
		}
	},[alias])
	useEffect(function(){
	    global.config.setTitleWebsite(state.data.Name || "");
	},[state.data.Name])
	return(
		<DetailContext.Provider value={{state,dispath}}>
			{children}
		</DetailContext.Provider>
	)
}
export default memo(DetailProvider);