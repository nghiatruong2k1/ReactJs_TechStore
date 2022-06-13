import {memo} from 'react';
import {Routes,Route} from 'react-router-dom';
import {Grid} from '@mui/material/';
import OrdersContent from "./Orders/";
import {getActionName} from "../../../../../Config/Route/";
function Content({...props}){
  return(
    <Grid item {...props}>
      <Routes>
        <Route path={`${getActionName("user","profile","orders")}`} 
            element={<OrdersContent />} />
      </Routes>
    </Grid>
  )
}
export default memo(Content);