import {memo,useContext} from 'react';
import {
  Tooltip,
  IconButton,
  Typography,
  Stack
} from '@mui/material/';
import {
  AddPhotoAlternate,
  BurstMode
  ,HighlightOff
} from '@mui/icons-material/';
import styles from './styles.module.css';
import {UploadImageContext} from "../provider";
function Head({...props}){
  const {state,handle} = useContext(UploadImageContext);
  function handleCancel(){
    handle.cancel();
    handle.close();
  }
  return(
    <Stack direction="row" spacing={1} alignItems="center">
      <Typography flex="1" variant="h4">
        {state.action == "" && "Chọn hình ảnh"}
        {state.action == "add" && "Cập nhật hình ảnh"}
        {state.action == "update" && "Thêm hình ảnh"}
      </Typography>
      {
        state.action !== "" 
        && (<Tooltip title="Danh sách hình ảnh" placement="top">
              <IconButton onClick={(()=>(handle.set("action","")))} color="success">
                <BurstMode />
              </IconButton>
          </Tooltip>)
        || (<Tooltip title="Thêm hình ảnh" onClick={(()=>(handle.set("action","add")))} placement="top">
            <IconButton color="success">
              <AddPhotoAlternate />
            </IconButton>
        </Tooltip>)
      }
      <Tooltip title="Đóng" placement="top">
          <IconButton onClick={handleCancel} color="error">
            <HighlightOff className={styles.close} />
          </IconButton>
      </Tooltip>
    </Stack>
  )
}
export default memo(Head);