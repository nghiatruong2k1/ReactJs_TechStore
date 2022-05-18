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
  const {state,dispath,handle} = useContext(UploadImageContext);
  return(
    <Stack direction="row" spacing={1} alignItems="center">
      <Typography flex="1" variant="h4">
        {state.action == "" && "Chọn hình ảnh"}
        {state.action == "add" && "Thêm hình ảnh"}
        {state.action == "update" && "Sửa hình ảnh"}
      </Typography>
      {
        state.action !== "" 
        && (<Tooltip title="Danh sách hình ảnh" placement="top" arrow>
              <IconButton onClick={()=>(dispath(['set_action',""]))} color="success">
                <BurstMode />
              </IconButton>
          </Tooltip>)
        || (<Tooltip title="Thêm hình ảnh" onClick={()=>(dispath(['set_action',"add"]))} placement="top" arrow>
            <IconButton color="success">
              <AddPhotoAlternate />
            </IconButton>
        </Tooltip>)
      }
      <Tooltip title="Đóng" placement="top">
          <IconButton onClick={()=>{handle.close();handle.cancel();}} color="error">
            <HighlightOff className={styles.close} />
          </IconButton>
      </Tooltip>
    </Stack>
  )
}
export default memo(Head);