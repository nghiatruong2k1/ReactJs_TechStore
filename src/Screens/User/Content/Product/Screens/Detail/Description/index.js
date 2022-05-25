import {memo,useContext,useEffect,useRef} from 'react';
import clsx from 'clsx';
import {Grid,Box,Card,CardContent,Button,Stack,Skeleton} from '@mui/material/';
import styles from './styles.module.css';
import {DetailContext} from "../provider";
function FullDes({...props}){
  const {state} = useContext(DetailContext);
  const thisRef = useRef(null);
  useEffect(function(){
    if(thisRef.current){
      thisRef.current.innerHTML = state.data.FullDes || "";
    }
  },[state])
  return(
    <Grid item {...props}>
      <Card>
        <CardContent className={styles.content}>
          {
            (!state.isLoading && state.data)
            && (
                <>
                  <Box className={styles.fulldes} ref={thisRef}></Box>
                  <Button className={styles.button} sx={{px:5}} variant="contained">Xem chi tiết</Button>
                </>
            )||(
              <Skeleton variant="text" width="100%" height = '10em'  />
            )
          }
        </CardContent>
      </Card>
    </Grid>
  )
}
export default memo(FullDes);