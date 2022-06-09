import {memo,useRef,useState,useContext} from 'react';
import {Avatar,Grid} from '@mui/material/';

import {OptionButton} from "../../Components/";
import Navbar from "./Navbar";

function Profile(props){
  const {auth} = useContext(global.config.AppContext);
  const [isOpen,setOpen] = useState(false);
  const buttonRef = useRef(null);
  if(auth.state.user && typeof(auth.state.user) === 'object'){
    let {FirstName,LastName,ImageUrl,TypeId} = auth.state.user;
    let name = (FirstName || "") +" "+ (LastName || "");
    return(
      <Grid item {...props}>
        <OptionButton
          loading = {auth.state.isLoading}
          ref={buttonRef}
          onClick={()=>{setOpen(true)}}
          title={name}
          icon={<Avatar alt={name} src={ImageUrl} />}
          state={isOpen}
          dispath={setOpen}
        >
          <Navbar 
            isAdmin={TypeId == 4}
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