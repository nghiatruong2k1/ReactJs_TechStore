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
function Head({...props}){
  const {uploadImage} = useContext(global.config.context);
  function handleCancel(){
    uploadImage.handle.cancel();
    uploadImage.handle.close();
  }
  return(
    <Stack direction="row" spacing={1} alignItems="center">
      <Typography flex="1" variant="h4">
        {uploadImage.state.action == "" && "Chọn hình ảnh"}
        {uploadImage.state.action == "add" && "Cập nhật hình ảnh"}
        {uploadImage.state.action == "update" && "Thêm hình ảnh"}
      </Typography>
      {
        uploadImage.state.action !== "" 
        && (<Tooltip title="Danh sách hình ảnh" placement="top">
              <IconButton onClick={(()=>(uploadImage.handle.set("action","")))} color="success">
                <BurstMode />
              </IconButton>
          </Tooltip>)
        || (<Tooltip title="Thêm hình ảnh" onClick={(()=>(uploadImage.handle.set("action","add")))} placement="top">
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