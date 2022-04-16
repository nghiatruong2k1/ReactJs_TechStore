import {memo,useContext} from 'react';
import {Grid} from '@mui/material/';
import styles from './styles.module.css';

import {ProductsContext} from "../../provider";
import {ViewContent} from "../../../../../../../Components/";
import ContentProduct from "./Product/";
function View({...props}){
  const {state} = useContext(ProductsContext);
  return(
    <Grid container className={styles.group}>
      <ViewContent loading={false} length={state.datas.length}>
          {
            state.datas.map(function(data,index){
              return (<ContentProduct loading={state.isLoading} data={data} key={index}/>)
            }) 

          }
          </ViewContent>
    </Grid>
  )
}
export default memo(View);