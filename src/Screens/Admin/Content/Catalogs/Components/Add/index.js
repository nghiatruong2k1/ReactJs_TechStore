import {memo,useEffect,useReducer,useContext} from 'react';
import styles from './styles.module.css';
import Detail from "../Detail/";
function Add({controller,children,...props}){
  const Fetch = global.config.useFetch();
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
    <Detail id={0} controller={controller} handle={handle}>
      {children}
    </Detail>
  )
}
export default memo(Add);