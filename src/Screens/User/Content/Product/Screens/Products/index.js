import {memo,useEffect,useRef,useReducer} from 'react';
import {useFetch} from "../../../../../../Config/Fetch";
import {reducer,initData,handleGetTitle} from "./init";
import { useParams } from 'react-router-dom';
import ViewList from './Screens/';

export const ProductsGet = memo(function ({action,...props}){
    const Fetch = useFetch("products get");
    const {alias} = useParams();
    const handleRef = useRef({});
    const [state,dispath] = useReducer(reducer,initData)
    useEffect(function() { 
        handleGetTitle({getter:Fetch.get,action,feild:alias})
	},[action,alias]);
  return(
    <ViewList state={state} dispath={dispath} 
        action={action} feild={alias} handle={handleRef.current}
    />
  )
})
export const ProductsSearch = memo(function ({...props}){
    const {query} = useParams();
    const handleRef = useRef({});
    const [state,dispath] = useReducer(reducer,initData)
    useEffect(function() { 
        global.config.setTitleWebsite(`Tìm kiếm '${query}'`);
	},[query]);
  return(
    <ViewList state={state} dispath={dispath} 
        action={"search"} feild={query} handle={handleRef.current}
    />
  )
})