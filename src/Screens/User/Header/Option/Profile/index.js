import {memo,useRef,useReducer,useEffect,useContext,useMemo} from 'react';
import {useCookies} from 'react-cookie';
import {Avatar} from '@mui/material/';
import {initData,reducer} from "./init";
import styles from '../styles.module.css';

import {OptionButton} from "../index";
import Navbar from "./Navbar";
import {useFetch} from "../../../../../Config/Fetch/";

function Profile(){
  const {auth} = useContext(global.config.AppContext);
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
  const {name,avatar} = useMemo(function(){
    let name;
    let avatar;
    if(auth.state.user){
      name = (auth.state.user.FirstName && (auth.state.user.FirstName+" ") || "")
      + (auth.state.user.LastName && (auth.state.user.LastName+" "));

      avatar = auth.state.user.ImageUrl;  
    }
    return {name,avatar}
  },[auth.state.user])
  return (
    <OptionButton
      show={Boolean(auth.state.user)}
      loading = {auth.state.isLoading}
      ref={buttonRef}
      onClick={()=>{handle && handle.open()}}
      title={name ?? "Tài khoản"}
      icon={<Avatar className={styles.icon} alt={name ?? "Tài khoản"} src={avatar} />}
      state={state}
    >
      <Navbar 
        open={state.isOpen} 
        onClose={()=>{handle && handle.close()}} 
        anchorEl={buttonRef.current} 
      />
    </OptionButton>
  )
}
export default memo(Profile);