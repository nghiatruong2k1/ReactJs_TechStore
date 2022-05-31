import {memo,useContext} from 'react';
import clsx from 'clsx';
import {Grid,DialogContent} from '@mui/material/';
import {} from '@mui/icons-material/';
import styles from './styles.module.css';
import {ListContext} from "../provider";
import ViewItem from "./ViewData";
import {ViewContent} from "../../../../Components/"
function ListView({...props}){
  const {state} = useContext(ListContext);
  return(
    <Grid  
      container 
      columnSpacing={2} 
      rowSpacing={2}
    >
      <ViewContent loading={state.isLoading} length={state.datas.length}>
        {
          state.datas.map(function(data,index){
            return (<ViewItem key={index} data={data} loading={state.isLoading || !Boolean(data)} />)
          })
        }
      </ViewContent>
    </Grid>
  )
}
export default memo(ListView);