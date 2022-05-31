import {memo,useContext} from 'react';
import {
  Tooltip,
  IconButton,
  Typography,
  Stack,
  DialogTitle
} from '@mui/material/';
import {CloudUpload,HighlightOff} from '@mui/icons-material/';
import {UploadImageContext} from "../../provider";

import InputUpload from './InputUpload';
function Head({...props}){
  const {addImage} = useContext(UploadImageContext);
  return(
  <DialogTitle sx={{py:0.5,px:1}}>
    <Stack direction="row" spacing={1} alignItems="center">
      <Typography flex="1" variant="h4">
        Thêm hình ảnh
      </Typography>
      <Tooltip title="Tải lên" placement="top">
        <IconButton >
          <CloudUpload />
          <InputUpload />
        </IconButton>
      </Tooltip>
      <Tooltip title="Đóng" placement="top">
          <IconButton onClick={()=>{
            addImage.handle.close();
          }}>
            <HighlightOff  />
          </IconButton>
      </Tooltip>
    </Stack>
  </DialogTitle>
  )
}
export default memo(Head);