import {memo} from 'react';
import {
  Grid,Stack,FormControl
} from '@mui/material/';


import InfoName from "./Name/";
import InfoPublic from "./Public/";
import InfoInput from "./Input/";
import InfoSubmit from "./Submit/";
import InfoView from "./View/";
import Provider from "./provider";

function ProductInfo({...props}){
  function handleSubmit(e){
    console.log(e);
    e.preventDefault();
  }
  return(
  <Provider>
    <FormControl fullWidth component="form" onSubmit={handleSubmit}>
      <Grid container rowSpacing={1} columnSpacing={2}>
        <Grid item xs={8}>
          <Stack spacing={2}>
            <InfoInput />
            <InfoName left={{xs:12,lg:3}} right={{xs:12,lg:9}}/>
            <InfoPublic left={{xs:12,lg:3}} right={{xs:12,lg:9}}/>
            <InfoSubmit />
          </Stack>
        </Grid>
        <Grid item xs={4}>
          <InfoView />
        </Grid>
      </Grid>
    </FormControl>
  </Provider>
  )
}
export default memo(ProductInfo);