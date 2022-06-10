import {memo,useEffect,useMemo,useReducer} from 'react';
import {useFetch} from "../../../../../../Config/Fetch";
import {reducer,initData,handleGetDatas,handleGetLength} from "../init";

import ViewList from '../../Components/ViewList';
const bodyRoot = document.getElementById("root");
function ListGet({controller,title,...props}){
  const Fetch = useFetch("list get");
  const [state,dispath] = useReducer(reducer,initData)
  useEffect(function(){
		global.config.setTitleWebsite("Danh sách "+(title || ""));
	},[title]);

  useEffect(function() { 
    controller &&  handleGetLength({
        getter:Fetch.get,
        dispath,
        api:`api/${controller}/count`
      });
	},[controller]);

	useEffect(function() {
		bodyRoot.scrollTop = 0;
	  controller && handleGetDatas({
        getter:Fetch.get,
        dispath,
	    	state,
	    	api:`api/${controller}`,
	    	onStart:(()=>{
	    		dispath(['set_data',Array(state.limit ?? 1).fill(undefined)])
	    		dispath(['set_loading',true])
	        }),onEnd:(()=>{
	        	dispath(['set_loading',false])
	        })
	    })
	},[controller,state.page,state.sort]);

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
	},[controller]);
  return(
    <ViewList state={state} dispath={dispath} controller={controller}/>
  )
}


export default memo(ListGet);
