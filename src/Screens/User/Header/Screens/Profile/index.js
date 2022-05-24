import {memo,useRef,useState,useEffect,useContext,useMemo} from 'react';
import {useCookies} from 'react-cookie';
import {Avatar,Grid} from '@mui/material/';
import {initData,reducer} from "./init";

import {OptionButton} from "../../Components/";
import Navbar from "./Navbar";
import {useFetch} from "../../../../../Config/Fetch/";

function Profile(props){
  const {auth} = useContext(global.config.AppContext);
  const [isOpen,setOpen] = useState(false);
  const buttonRef = useRef(null);

  if(Boolean(auth.state.user)){
    let {FirstName,LastName,ImageUrl} = auth.state.user;
    let avatar = ImageUrl; 
    let name = (FirstName || "") +" "+ (LastName || "");
    return(
      <Grid item {...props}>
        <OptionButton
          loading = {auth.state.isLoading}
          ref={buttonRef}
          onClick={()=>{setOpen(true)}}
          title={name}
          icon={<Avatar alt={name} src={avatar} />}
          state={isOpen}
          dispath={setOpen}
        >
          <Navbar 
            open={buttonRef.current && isOpen} 
            onClose={()=>{setOpen(false)}} 
            anchorEl={buttonRef.current} 
          />
        </OptionButton>
      </Grid>
    )
  }else{
    return <></>
  }
}
export default memo(Profile);