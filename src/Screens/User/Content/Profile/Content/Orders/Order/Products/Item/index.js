import {memo} from 'react';
import clsx from 'clsx';
import {ListItem,Grid} from '@mui/material/';
import {} from '@mui/icons-material/';
import styles from './styles.module.css';

import ItemImage from "./Image/";
import ItemName from "./Name/";
import ItemPrice from "./Price/";
import ItemCategory from "./Category/";
import ItemBrand from "./Brand/";
import Provider from "./provider";
function ViewItem({data,...props}){
  return(
  <Provider data={data}>
    <ListItem divider spacing={1}>
      <Grid container spacing={2}>
        <Grid item xs={1}>
          <ItemImage />
        </Grid>
        <Grid item xs={4}>
          <ItemName />
          <ItemPrice />
        </Grid>
        <Grid item xs={3}>
          <ItemCategory />
          <ItemBrand />
        </Grid>
        <Grid item xs={4}>
        </Grid>
      </Grid>
    </ListItem>
  </Provider>
  )
}
export default memo(ViewItem);