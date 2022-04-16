

import {useContext} from "react";
import {handleGet,handlePost,handlePut,handleDelete} from "./methodFetch";
import DialogResult from "../../Components/DialogResult/";

export const useFetch = function(location){
  const {loading,toast} = useContext(global.config.context);
  return {
    get:function(props){
      handleGet({...props,location,toast,loading})
    },post:function(props){
      handlePost({...props,location,toast,loading})
    },put:function(props){
      handlePut({...props,location,toast,loading})
    },delete:function({title,message,...props}){
      DialogResult({
        title,message, 
        onYes:()=>(handleDelete({...props,location,toast,loading}))
      });
    }
  }
}

