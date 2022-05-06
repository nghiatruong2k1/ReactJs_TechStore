import {memo,useReducer} from 'react';
import clsx from 'clsx';
import {
  Grid,
  TableRow,
  TableCell,
  Skeleton,
  Tooltip,
  IconButton,
  Stack
} from '@mui/material/';
import {} from '@mui/icons-material/';
import styles from './styles.module.css';

import {initData,reducer} from "./init";
import Provider from "./provider";

import Image from "./Image/";
import Name from "./Name/";
import Brand from "./Brand/";
import Category from "./Category/";
import Type from "./Type/";
import Price from "./Price/";
import SalePrice from "./SalePrice/";
import Quantity from "./Quantity/";
import DeleteButton from "./DeleteButton/";

function Product({data,index,...props}){
  const [state,dispath] = useReducer(reducer,initData);
  return(
  <Provider data={data} state={state} dispath={dispath} index={index}>
    <TableRow>
      <TableCell>
        <Grid container spacing={1}>
          <Grid item xs={4}>
            <Image />
          </Grid>
          <Grid item xs={8}>
            <Name />
            <Brand/>
            <Category/>
            <Type/>
          </Grid>
        </Grid>
      </TableCell>
      <TableCell> 
        <Quantity />
      </TableCell>
      <TableCell> 
        <div className="price-wrap"> 
          <SalePrice /> 
          <Price />
        </div>
      </TableCell>
      <TableCell>  
        <Stack direction="row">
          <Tooltip placement="top" title="Theo dõi sản phẩm">
            <IconButton>
              <i className="fa fa-heart"></i>
            </IconButton>
          </Tooltip>
          <DeleteButton />
        </Stack>
      </TableCell>
    </TableRow>
  </Provider>
  )
}
export default memo(Product);