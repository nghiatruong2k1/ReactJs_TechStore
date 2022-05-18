import {memo,useReducer} from 'react';
import clsx from 'clsx';
import {
  Grid,
  ListItem,
  Skeleton,
  Typography,
  Tooltip,
  IconButton,
  Stack
} from '@mui/material/';
import {} from '@mui/icons-material/';
import styles from './styles.module.css';
import {NavLink} from "react-router-dom";
import Provider from "./provider";

import {formatNumber} from "../../../../../../Config/Format/";
import {getRoute} from "../../../../../../Config/Route/";
import {Frame,Image} from "../../../../../../Components/";
import Quantity from "./Quantity/";
import DeleteButton from "./DeleteButton/";

function Product({data,index,...props}){
  return(
  <Provider data={data} index={index}>
  <ListItem divider>
    <Grid container alignItems="center">
      <Grid item xs={5}>
        <Grid container spacing={1}>
          <Grid item xs={2}>
            <Frame square loading={!data}>
              <Image contain src={data && data.ImageUrl}/>
            </Frame>
          </Grid>
          <Grid item xs={8}>
            <Typography component={data && NavLink || "p"} to={getRoute("user","product","detail",{alias:data && data.Alias})}>
              {
                data && (data.Name ?? "Đang cập nhật")
                ||(<Skeleton className="skeleton" />)
              }
            </Typography>
          </Grid>
        </Grid>
      </Grid>
      <Grid item xs={2}> 
        <Quantity />
      </Grid>
      <Grid item xs={3}> 
        <Typography>
          {
            data && (formatNumber(data.Price,3,0) + " đ")
            ||(<Skeleton className="skeleton" />)
          }
        </Typography>
      </Grid>
      <Grid item xs={2}>  
        <Stack direction="row">
          <Tooltip placement="top" title="Theo dõi sản phẩm">
            <IconButton>
              <i className="fa fa-heart"></i>
            </IconButton>
          </Tooltip>
          <DeleteButton />
        </Stack>
      </Grid>
    </Grid>
  </ListItem>
  </Provider>
  )
}
export default memo(Product);