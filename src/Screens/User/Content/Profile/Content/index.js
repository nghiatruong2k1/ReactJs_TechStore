import {memo} from 'react';
import clsx from 'clsx';
import {Routes,Route} from 'react-router-dom';
import {Grid} from '@mui/material/';
import {} from '@mui/icons-material/';
import styles from './styles.module.css';
import OrdersContent from "./Orders/";
function Content({...props}){
  return(
    <Grid item {...props}>
      <Routes>
        <Route path="/orders*" element={<OrdersContent />} />
      </Routes>
    </Grid>
  )
}
export default memo(Content);