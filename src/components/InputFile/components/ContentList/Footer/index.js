import {memo,useContext,useMemo} from 'react';
import {Button,DialogActions} from '@mui/material/';
import {Cancel,CheckCircle} from '@mui/icons-material/';
import {UploadImageContext} from "../../provider";

import { makeStyles } from '@mui/styles';
const useStyles = makeStyles((theme)=>{
  return {
    cancel:{
      color:"var(--error) !important",
      borderColor:"currentcolor !important",
      backgroundColor:"var(--errorBg) !important"
    },submit:{
      color:"var(--success) !important",
      borderColor:"currentcolor !important",
      backgroundColor:"var(--successBg) !important"
    }
  }}
)
function Footer({...props}){
  const {select,handle} = useContext(UploadImageContext);
  const styles = useStyles();
  return(
    <DialogActions sx={{p:1}}>
      <Button className={styles.cancel} startIcon={<Cancel />}
        variant="outlined" onClick={()=>{
          handle.cancel();
          handle.close();
        }}>
        Hủy
      </Button>
      <Button className={styles.submit} startIcon={<CheckCircle />}
        variant="outlined" onClick={()=>{
          select && handle.submit();
          handle.close();
        }}>
        Chọn hình ảnh
      </Button>
    </DialogActions>
  )
}
export default memo(Footer);