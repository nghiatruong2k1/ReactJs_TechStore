import {memo} from 'react';
import {
  Grid,Stack
} from '@mui/material/';


import InfoName from "./Name/";
import InfoSize from "./Size/";
import InfoType from "./Type/";
import InfoPublic from "./Public/";
import InfoInput from "./Input/";
import InfoSubmit from "./Submit/";
import InfoView from "./View/";
import Provider from "./provider";

function ProductInfo({...props}){
  return(
  <Provider>
    <Grid container rowSpacing={1} columnSpacing={2}>
        <Grid item xs={8}>
          <Stack spacing={2}>
            <InfoInput />
            <InfoName left={{xs:12,lg:3}} right={{xs:12,lg:9}}/>
            <InfoSize left={{xs:12,lg:3}} right={{xs:12,lg:9}}/>
            <InfoType left={{xs:12,lg:3}} right={{xs:12,lg:9}}/>
            <InfoPublic left={{xs:12,lg:3}} right={{xs:12,lg:9}}/>
            <InfoSubmit />
          </Stack>
        </Grid>
        <Grid item xs={4}>
          <InfoView />
        </Grid>
      </Grid>
  </Provider>
  )
}
export default memo(ProductInfo);