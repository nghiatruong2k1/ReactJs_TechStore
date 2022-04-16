import {memo,useContext,useEffect,useRef} from 'react';
import clsx from 'clsx';
import {Grid,Box,Stack,Skeleton} from '@mui/material/';
import styles from './styles.module.css';
import './styles.css';
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
      <Stack>
        {
          (!state.isLoading && state.data)
          && (
              <Box className="product-detail-description" ref={thisRef}></Box>
          )||(
            <Skeleton variant="text" width="100%" height = '10em'  />
          )
      }
      </Stack>
    </Grid>
  )
}
export default memo(FullDes);