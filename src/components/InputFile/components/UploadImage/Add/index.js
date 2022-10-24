import {memo,useReducer,useContext,useMemo} from 'react';
import clsx from 'clsx';
import {
  Dialog,Box,Paper,DialogContent
} from '@mui/material/';
import {} from '@mui/icons-material/';

import {UploadImageContext} from "../provider";
import {initState,reducerState} from "./init";
import Provider from "./provider";
import AddHead from "./Head";
import AddContent from "./Content";
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
function UploadAddImage({...props}){
  const [state,dispath] = useReducer(reducerState,initState);
  const {addImage} = useContext(UploadImageContext);
  const styles = useStyles();
  return(
  	<Dialog
	      open={addImage.state.isOpen}
	      onClose={()=>(addImage.handle.close())}
	      fullWidth={true}
        maxWidth="sm"
	      scroll={'paper'}
	      PaperProps={{
          sx:{p:1},
	        className:styles.container
	      }}
	  >
	    <Provider state={state} dispath = {dispath}>
        <AddHead />
        <Paper component={DialogContent} sx={{p:0}} className={styles.content} variant="outlined">
            <AddContent />
        </Paper>
	    </Provider>
	  </Dialog>
  )
}
export default memo(UploadAddImage);
