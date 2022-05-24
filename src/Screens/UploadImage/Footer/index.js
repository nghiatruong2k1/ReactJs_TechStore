import {memo,useContext} from 'react';
import {Button} from '@mui/material/';
import {Cancel,CheckCircle} from '@mui/icons-material/';
import {UploadImageContext} from "../provider";
function Footer({...props}){
  const {state,handle} = useContext(UploadImageContext);
  if(state.action == ""){
    return(
    <>
      <Button color="error" startIcon={<Cancel />}
        variant="contained" onClick={()=>{
          handle.cancel();
          handle.close();
        }}>
        Hủy
      </Button>
      <Button color="success" startIcon={<CheckCircle />}
        variant="contained" onClick={()=>{
          state.select && handle.submit();
          handle.close();
        }}>
        Chọn hình ảnh
      </Button>
    </>
  )
  }else{
    return <></>
  }
}
export default memo(Footer);