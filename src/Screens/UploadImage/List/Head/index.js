import {memo,useContext} from 'react';
import {
  Tooltip,
  IconButton,
  Typography,
  Stack,
  DialogTitle
} from '@mui/material/';
import {
  AddPhotoAlternate
  ,HighlightOff
} from '@mui/icons-material/';
import {UploadImageContext} from "../../provider";
import {ListContext} from "../provider";
function Head({...props}){
  const {handle,addImage} = useContext(UploadImageContext);
  const list = useContext(ListContext);
  return(
  <DialogTitle sx={{py:0.5,px:1}}>
    <Stack direction="row" spacing={1} alignItems="center">
      <Typography flex="1" variant="h4">
        Chọn hình ảnh
      </Typography>
      <Tooltip title="Thêm hình ảnh"placement="top" arrow>
        <IconButton onClick={()=>{
            addImage.handle.open({
              onClose:()=>{list.handle.get()}
            })}}
        >
          <AddPhotoAlternate />
        </IconButton>
      </Tooltip>
      <Tooltip title="Đóng" placement="top">
          <IconButton onClick={()=>{handle.close();handle.cancel();}}>
            <HighlightOff  />
          </IconButton>
      </Tooltip>
    </Stack>
  </DialogTitle>
  )
}
export default memo(Head);