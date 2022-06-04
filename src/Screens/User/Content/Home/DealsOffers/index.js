import {memo,useReducer,useRef} from 'react';
import {
  Box,
  Paper,
  Grid,
  Stack,
  Divider,
  Typography
} from '@mui/material/';


import {initData,reducer} from './init';
import Provider from "./provider";
import TimerContent from "./Timer/";
import ProductContent from "./Content/";
import useStyles from './styles';
function DealsOffers({...props}){
  const [state,dispath] = useReducer(reducer,initData);
  const sliderRef = useRef();
  const styles = useStyles();
  return(
  <Provider state={state} dispath={dispath}>
    <Grid container component={Paper} sx={styles.container} my={3}>
      <Grid item xs={12} lg={3}>
        <Stack p={3}>
          <Typography component="h4">Sản phẩm khuyến mãi</Typography>
          <TimerContent />
        </Stack>
      </Grid>
      <ProductContent ref={sliderRef} xs={12} lg={9} />
    </Grid>
  </Provider>
  )
}
export default memo(DealsOffers);