import {memo} from 'react';
import {Grid} from '@mui/material/';
import GridHead from "../Head/";
import GridNavbar from "./Navbar/";
import GridContent from "./Content/";
import GridPaging from "../Paging/";
function GridView({...props}){
  return(
    <>
      <GridHead component={Grid} item xs={12}/>
      <GridNavbar item xs={12}/>
      <GridContent item xs={12}/>
      <GridPaging />
    </>
  )
}
export default memo(GridView);