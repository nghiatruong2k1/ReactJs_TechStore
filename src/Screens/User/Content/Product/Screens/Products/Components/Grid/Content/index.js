import {memo,useContext} from 'react';
import {Grid} from '@mui/material/';

import {ProductsContext} from "../../../init";
import { ViewContent } from '../../../../../../../../../Components/';
import ContentProduct from "./Product/";
function View({...props}){
  const {state} = useContext(ProductsContext);
  return(
    <Grid {...props}>
      <Grid container spacing={1}>
        <ViewContent loading={state.isLoading} length={state.total}>
            {
              state.datas.map(function(data,index){
                return (<ContentProduct loading={!Boolean(data) || state.isLoading} data={data} key={index}/>)
              }) 

            }
            </ViewContent>
      </Grid>
    </Grid>
  )
}
export default memo(View);