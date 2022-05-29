import {memo,useContext} from 'react';
import {Grid,Stack} from '@mui/material/';

import { ViewContent } from '../../../../../../../../../Components/';
import ContentPaging from "../../Paging";
import ContentHead from "../../Head/";
import ContentProduct from "./Product";
import {ProductsContext} from "../../../init";

function Content({...props}){
  const {state} = useContext(ProductsContext);
  return(
    <Grid item {...props}>
        <ContentHead />   
        <Stack >
          <ViewContent loading={state.isLoading} length={state.total}>
          {
            state.datas.map(function(data,index){
              return (<ContentProduct loading={!Boolean(data) || state.isLoading} data={data} key={index}/>)
            }) 

          }
          </ViewContent>
        </Stack>
        <ContentPaging />
    </Grid>
  )
}
export default memo(Content);