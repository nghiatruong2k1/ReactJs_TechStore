import {memo,useRef,useReducer} from 'react';

import clsx from 'clsx';
import {Grid,Box,Stack,IconButton} from '@mui/material/';
import {} from '@mui/icons-material/';
import styles from './styles.module.css';
import {initData,reducer} from "./init";
import Provider from "./provider";

import Images from "./Images/";
import Arrows from "./Arrows/";
import Dots from "./Dots/";
function SliderContent({...props}){
  const [state,dispath] = useReducer(reducer,initData);
  const thisRef = useRef(null);
  return(
  <Provider state={state} dispath={dispath}>
    <Grid item p={0.5} {...props}>
      <Box position="relative">
        <Images ref={thisRef}/>
        <Arrows slider={thisRef.current}/>
        <Dots slider={thisRef.current}/>
      </Box> 
    </Grid>
  </Provider>
  )
}
export default memo(SliderContent);