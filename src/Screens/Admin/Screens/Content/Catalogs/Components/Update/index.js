import {memo,useContext} from 'react';
import {useParams} from "react-router-dom";
import Detail from "../Detail/";
import { useFetch } from '../../../../../../../Config/Fetch/';
function Update({controller,rulers,children,...props}){
  const Fetch = useFetch();
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
    <Detail id={id} rulers={rulers} controller={controller} handle={handle}>
      {children}
    </Detail>
  )
}
export default memo(Update);