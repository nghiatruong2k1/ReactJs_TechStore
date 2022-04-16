import {memo,useContext} from 'react';
import {Button} from '@mui/material/';
import {Cancel,CheckCircle} from '@mui/icons-material/';
function Footer({...props}){
  const {uploadImage} = useContext(global.config.context);
  if(uploadImage.state.action == ""){
    return(
    <>
          <Button color="error" startIcon={<Cancel />}
            variant="contained" onClick={()=>{
              uploadImage.handle.cancel();
              uploadImage.handle.close();
            }}>
            Cancel
          </Button>
          <Button color="success" startIcon={<CheckCircle />}
            variant="contained" onClick={()=>{
              uploadImage.handle.submit();
              uploadImage.handle.close();
            }}>
            Save
          </Button>
    </>
  )
  }else{
    return <></>
  }
}
export default memo(Footer);