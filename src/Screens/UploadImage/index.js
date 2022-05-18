import {memo,useContext,useReducer} from 'react';
import {useCookies} from 'react-cookie';
import clsx from 'clsx';
import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Divider
} from '@mui/material/';
import {} from '@mui/icons-material/';
import styles from './styles.module.css';

import {initData,reducer} from "./init";
import Provider from "./provider";
import ImageHead from "./Head/";
import ImageFooter from "./Footer/";
import ImageList from "./List/";


function UploadImage({...props}){
	const [state,dispath] = useReducer(reducer,initData);
  	const {image} = useContext(global.config.AppContext);
  	return(
  	<Dialog
	      open={image.state.isOpen}
	      onClose={()=>(image.handle.close())}
	      fullWidth={true}
	      scroll={'body'}
	      PaperProps={{
	        className:styles.container
	      }}
	>
	    <Provider state={state} dispath = {dispath}>
	      <DialogTitle className={styles.head}>
	        <ImageHead />
	      </DialogTitle>
	      <Divider />
	      <DialogContent className={styles.content}>
	        {state.action == "" && <ImageList />}
	        {state.action == "add" && "Thêm hình ảnh"}
	        {state.action == "update" && "Sửa hình ảnh"}
	      </DialogContent>
	      <Divider />
	      <DialogActions className={styles.footer}>
	      	<ImageFooter />
	      </DialogActions>
	    </Provider>
	</Dialog>
  	)
}
export default memo(UploadImage);