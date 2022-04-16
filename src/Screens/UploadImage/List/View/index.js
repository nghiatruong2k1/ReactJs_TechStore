import {memo,useContext} from 'react';
import clsx from 'clsx';
import {Grid} from '@mui/material/';
import {} from '@mui/icons-material/';
import styles from './styles.module.css';
import {ListContext} from "../provider";
import ViewData from "./ViewData";
import ViewLoading from "./ViewLoading";
import ViewEmpty from "./ViewEmpty";

function ListView({...props}){
  const {state} = useContext(ListContext);
  return(
    <Grid  
      container 
      columnSpacing={2} 
      rowSpacing={2}
      name="select-image"
    >
      {
        state.isLoading && <ViewLoading xs={12}/>
        || state.datas.length > 0 && <ViewData /> || <ViewEmpty xs={12} />
      }
    </Grid>
  )
}
export default memo(ListView);