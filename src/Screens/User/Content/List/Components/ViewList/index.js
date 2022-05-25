import {memo,useEffect,useReducer} from 'react';
import {Grid} from '@mui/material/';

import Provider from "./provider";
import ViewData from "../ViewData/";
import {ViewContent} from "../../../../../../Components";
function ListView({state,dispath,controller,...props}){
  return(
    <Provider state={state} dispath={dispath} controller={controller}>
      <Grid container columnSpacing={1} rowSpacing={1}>
        <ViewContent loading={state.isLoading} length={state.total}>
        {
          state.datas.map(function(data,index){
            return(<ViewData loading={!Boolean(data) || state.isLoading} data={data} key={index} controller={controller} />)
          })
        }
        </ViewContent>
      </Grid>
    </Provider>
  )
}
export default memo(ListView);