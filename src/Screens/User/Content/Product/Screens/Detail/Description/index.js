import {memo,useContext,useEffect,useRef} from 'react';
import {Grid,Box,Card,CardContent,CardActions,Button,Stack,Skeleton} from '@mui/material/';
import {DetailContext} from "../provider";
import { makeStyles } from '@mui/styles';
const useStyles = makeStyles((theme)=>{
  return {
    content:{
      maxHeight:"40em",
      overflow:"hidden"
    },fulldes:{
      '& *':{
        maxWidth:"100%"
      }
    }
  }}
);
function FullDes({fullDes,loading,...props}){
  const styles = useStyles();
  const fullRef = useRef();
  useEffect(function(){
    if(fullDes && fullRef.current){
      fullRef.current.innerHTML = fullDes
    }
  },[fullDes])
  return(
    <Grid item {...props}>
      <Card>
        <CardContent className={styles.content}>
          <Box className={styles.fulldes} ref={fullRef}></Box>
          {loading  && (<Skeleton variant="text" width="100%" height = '20em'  />)}
        </CardContent>
        <CardActions sx={{justifyContent:"center"}}>
          <Button className={styles.button} sx={{px:5}} variant="contained">Xem chi tiết</Button>
        </CardActions>
      </Card>
    </Grid>
  )
}
export default memo(FullDes);