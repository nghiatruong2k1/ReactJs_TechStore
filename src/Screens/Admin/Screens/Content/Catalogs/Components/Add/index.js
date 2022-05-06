import {memo,useEffect,useReducer,useContext} from 'react';
import styles from './styles.module.css';
import Detail from "../Detail/";
import { useFetch } from '../../../../../../../Config/Fetch/';
function Add({controller,rulers,children,...props}){
  const Fetch = useFetch();
  const {toast} = useContext(global.config.context)
  const handle = {
    save:function(data){
      Fetch.post({
        api:"api/admin/"+controller+"/"
        ,params:data,
        onThen:function(){
        },onError:function(){
        }
      })
    }
  }

  return(
    <Detail id={0} rulers={rulers} controller={controller} handle={handle}>
      {children}
    </Detail>
  )
}
export default memo(Add);