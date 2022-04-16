import {memo} from 'react';
import clsx from 'clsx';
import {Grid} from '@mui/material/';
import {} from '@mui/icons-material/';
import styles from './styles.module.css';
import GridHead from "../Head/";
import GridContent from "./Content/";
import GridPaging from "../Paging/";
function GridView({...props}){
  return(
    <Grid item xs={12}>
      <GridHead />
      <GridContent />
      <GridPaging />
    </Grid>
  )
}
export default memo(GridView);