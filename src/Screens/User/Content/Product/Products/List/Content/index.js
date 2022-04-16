import {memo,useContext} from 'react';
import clsx from 'clsx';
import {Grid,Stack} from '@mui/material/';
import {} from '@mui/icons-material/';
import styles from './styles.module.css';

import {ViewContent} from "../../../../../../../Components/";
import ContentPaging from "../../Paging/";
import ContentHead from "../../Head/";
import ContentProduct from "./Product/";
import {ProductsContext} from "../../provider";

function Content({...props}){
  const {state} = useContext(ProductsContext);
  return(
    <Grid item {...props}>
        <ContentHead />   
        <Stack className={styles.group}>
          <ViewContent loading={false} length={state.datas.length}>
          {
            state.datas.map(function(data,index){
              return (<ContentProduct loading={state.isLoading} data={data} key={index}/>)
            }) 

          }
          </ViewContent>
        </Stack>
        <ContentPaging />
    </Grid>
  )
}
export default memo(Content);