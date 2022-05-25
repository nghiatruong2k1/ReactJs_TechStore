import {memo,useReducer,useRef} from 'react';
import {Box,Grid,Divider} from '@mui/material/';

import BrandsDescription from "./Description/";
import BrandsContent from "./Content/";
import {initData,reducer} from "./init";
import Provider from "./provider";
function Brands({...props}){
  const [state,dispath] = useReducer(reducer,initData);
  const sliderRef = useRef();
  return(
  <Provider state={state}dispath={dispath} slider={sliderRef.current}>
    <Box my={3}>
      <Divider textAlign="left" component="h3">
          Thương hiêụ:
      </Divider>
      <Grid container>
        <BrandsDescription xs={12} md={4} lg={3}/>
        <BrandsContent ref={sliderRef} xs={12} md={8} lg={9} /> 
      </Grid>
    </Box>
  </Provider>
  )
}
export default memo(Brands);