import {memo,useRef,useReducer,useEffect,useMemo} from 'react';
import {useCookies} from 'react-cookie';
import {Avatar} from '@mui/material/';
import {initData,reducer} from "./init";
import styles from '../styles.module.css';

import {OptionButton} from "../index";
import Navbar from "./Navbar";

function Profile(){
  const Fetch = global.config.useFetch();
  const [cookies,setCookies,removeCookies] = useCookies();
  const [state,dispath] = useReducer(reducer,initData);
  const buttonRef = useRef(null);
  const handle = useMemo(function(){
    return{
      open:function(){
        dispath({key:"set",payload:{isOpen:true}})
      },close:function(){
        dispath({key:"set",payload:{isOpen:false}})
      }
    }
  },[state])
  useEffect(function(){
    if(Boolean(cookies['token'])){
      Fetch.get({
        api:"api/user",
        onThen:function({data,...result}){
          if(data){
            dispath({key:'set_data',payload:{
              Name:(data.FirstName || "")+" "+(data.LastName || ""),
              Id:data.Id,
              ImageUrl:data.ImageUrl,
              TypeId:data.TypeId
            }})
          }else{
            removeCookies("token")
          }
        },onError:function(){
          dispath({key:"reset"})
        }
      })
    }else{
      dispath({key:"reset"})
    }
  },[cookies['token']])
  return (
    <OptionButton
      show={Boolean(state.data.Id > 0)}
      ref={buttonRef}
      onClick={()=>{handle && handle.open()}}
      title={state.data.Name || initData.data.Name}
      icon={<Avatar className={styles.icon} alt={state.data.Name ?? initData.data.Name} src={state.data.ImageUrl || ""} />}
      state={state}
    >
      <Navbar open={state.isOpen} onClose={()=>{handle && handle.close()}} anchorEl={buttonRef.current} typeId={state.data.TypeId}/>
    </OptionButton>
  )
}
export default memo(Profile);