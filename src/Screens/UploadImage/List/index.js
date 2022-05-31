import {memo,useReducer,useContext,useMemo} from 'react';
import clsx from 'clsx';
import {
  Dialog,Paper,DialogContent
} from '@mui/material/';
import {} from '@mui/icons-material/';

import {initData,reducer} from "./init";
import Provider from "./provider";

import ListHead from "./Head/";
import ListFooter from "./Footer/";
import ListView from "./View/";
import ListPaging from "./Paging/";
import { makeStyles } from '@mui/styles';
const useStyles = makeStyles((theme)=>{
  return {
    container:{
      color:`${theme.palette.text.paper} !important`,
      backgroundColor:`${theme.palette.background.paper} !important`
    },content:{
      color:`${theme.palette.text.default} !important`,
      backgroundColor:`${theme.palette.background.default} !important` 
    }
  }}
)
function UploadImageList({...props}){
  const [state,dispath] = useReducer(reducer,initData);
  const {image} = useContext(global.config.AppContext);
  const styles = useStyles();
  return(
  	<Dialog
	      open={image.state.isOpen}
	      onClose={()=>(image.handle.close())}
	      fullWidth={true}
        maxWidth="xl"
	      scroll={'body'}
	      PaperProps={{
	        className:styles.container
	      }}
	  >
	    <Provider state={state} dispath = {dispath}>
        <ListHead />
        <DialogContent sx={{p:1}}>
          <Paper className={styles.content} sx={{height:'100%',p:1}} variant="outlined">
            <ListView />
            <ListPaging /> 
          </Paper>
        </DialogContent>
        <ListFooter />
	    </Provider>
	  </Dialog>
  )
}
export default memo(UploadImageList);
