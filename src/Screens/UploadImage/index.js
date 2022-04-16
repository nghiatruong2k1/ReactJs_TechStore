import {memo,useContext} from 'react';
import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions
} from '@mui/material/';
import styles from './styles.module.css';
import UploadImageList from "./List/";
import UploadImageAdd from "./Add/";

import UploadImageHead from "./Head/";
import UploadImageFooter from "./Footer/";
function UploadImage({...props}){
  const {uploadImage} = useContext(global.config.context);
  return(
    <Dialog
        open={uploadImage.state.isOpen}
        onClose={()=>(uploadImage.handle.close())}
        fullWidth={true}
        maxWidth={"lg"}
        scroll={'paper'}
        PaperProps={{
          className:styles.container
        }}
      >
        <DialogTitle className={styles.head}>
          <UploadImageHead />
        </DialogTitle>
        <DialogContent className={styles.content} dividers={true}>
          {uploadImage.state.action == "" && <UploadImageList />}
          {uploadImage.state.action == "add" && <UploadImageAdd />}
        </DialogContent>
        <DialogActions className={styles.footer}>
          <UploadImageFooter />
        </DialogActions>
    </Dialog>
  )
}
export default memo(UploadImage);