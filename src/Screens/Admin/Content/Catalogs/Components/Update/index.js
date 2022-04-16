import {memo,useEffect,useReducer,useContext} from 'react';
import {useParams} from "react-router-dom";
import Detail from "../Detail/";
function Update({controller,children,...props}){
  const Fetch = global.config.useFetch();
  const {toast} = useContext(global.config.context)
  const {id} = useParams();
  const handle = {
    save:function(data){
      Fetch.put({
        api:"api/admin/"+controller+"/"
        ,params:data,
        onThen:function(result){
        },onError:function(){
        }
      })
    }
  };
  return(
    <Detail id={id} controller={controller} handle={handle}>
      {children}
    </Detail>
  )
}
export default memo(Update);