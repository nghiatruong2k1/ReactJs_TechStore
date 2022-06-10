import {memo,useEffect,useReducer} from 'react';
import { useParams } from 'react-router-dom';
import {useFetch} from "../../../../../../Config/Fetch";
import {reducer,initData,handleGetDatas,handleGetLength} from "../init";

import ViewList from '../../Components/ViewList';
const bodyRoot = document.getElementById("root");
function ListGet({controller,param,...props}){
    const Fetch = useFetch("list search");
    const params = useParams();
    const [state,dispath] = useReducer(reducer,initData)
    useEffect(function(){
        params[param] && global.config.setTitleWebsite("Tìm kiếm '"+(params[param] || "") +"'");
	  },[params[param]]);

    useEffect(function() { 
      controller &&  handleGetLength({
        getter:Fetch.get,
        dispath,
        api:`api/${controller}/search/count/${params[param]}`
      });
	  },[controller,params[param]]);

	useEffect(function() {
		bodyRoot.scrollTop = 0;
	  controller && handleGetDatas({
        getter:Fetch.get,
        dispath,
	    	state,
	    	api:`api/${controller}/search/${params[param]}`,
	    	onStart:(()=>{
	    		dispath(['set_data',Array(state.limit ?? 1).fill(undefined)])
	    		dispath(['set_loading',true])
	        }),onEnd:(()=>{
	        	dispath(['set_loading',false])
	        })
	    })
	},[controller,params[param],state.page,state.sort]);

	useEffect(function() {
    bodyRoot.scrollTop = 0;
    controller &&  handleGetDatas({
      getter:Fetch.get,
      dispath,
      state,
      api:`api/${controller}`
    })
	},[state.limit]);

	useEffect(function(){
		dispath(["set_page",1]);
	},[controller,params[param]]);
    return(
        <ViewList state={state} dispath={dispath} controller={controller}/>
    )
}


export default memo(ListGet);
