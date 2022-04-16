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
        {uploadImage.state.action == "" && "Select image"}
        {uploadImage.state.action == "add" && "Upload image"}
        {uploadImage.state.action == "update" && "Update image"}
      </Typography>
      {
        uploadImage.state.action !== "" 
        && (<Tooltip title="View images" placement="top">
              <IconButton onClick={(()=>(uploadImage.handle.set("action","")))} color="success">
                <BurstMode />
              </IconButton>
          </Tooltip>)
        || (<Tooltip onClick={(()=>(uploadImage.handle.set("action","add")))} title="Upload new image" placement="top">
            <IconButton color="success">
              <AddPhotoAlternate />
            </IconButton>
        </Tooltip>)
      }
      <Tooltip title="Close" placement="top">
          <IconButton onClick={handleCancel} color="error">
            <HighlightOff className={styles.close} />
          </IconButton>
      </Tooltip>
    </Stack>
  )
}
export default memo(Head);