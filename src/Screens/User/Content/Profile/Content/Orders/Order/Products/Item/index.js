import {memo} from 'react';
import clsx from 'clsx';
import {ListItem,Grid,Typography,Skeleton} from '@mui/material/';
import {} from '@mui/icons-material/';
import styles from './styles.module.css';


import {NavLink} from "react-router-dom";
import {Frame,Image} from "../../../../../../../../../Components/"
import { getRoute } from '../../../../../../../../../Config/Route/';
import { formatNumber } from '../../../../../../../../../Config/Format';
import Provider from "./provider";
function ViewItem({data,loading,...props}){
  return(
  <Provider data={data} loading={loading}>
    <ListItem divider spacing={1}>
      <Grid container spacing={2}>
        <Grid item xs={1}>
          <Frame square loading={loading}>
            <Image contain src={data && data.ImageUrl}/>
          </Frame>
        </Grid>
        <Grid item xs={4}>
          <Typography 
            className="h6"
            component={!loading && NavLink || "span"} 
            to={`${getRoute("user","product","detail",{alias:data && data.Alias})}`} 
          >
            {
              loading && <Skeleton className="skeleton" />
                || (data && data.Name || "Đang cập nhật")
            }
          </Typography>
          <Typography>
            {
              loading && <Skeleton className="skeleton" />
                || (data && data.Price && (formatNumber(data.Price,3,0) + "đ") || "Liên hệ")
            }
          </Typography>
        </Grid>
        <Grid item xs={3}>
          <Typography>
            {
              loading && <Skeleton className="skeleton" />
                || (data && data.BrandName || "")
            }
          </Typography>
          <Typography>
            {
              loading && <Skeleton className="skeleton" />
                || (data && data.CategoryName || "")
            }
          </Typography>
        </Grid>
        <Grid item xs={1}>
          <Typography>
            {
              loading && <Skeleton className="skeleton" />
                || (data && data.Quantity && ("x"+data.Quantity) || "")
            }
          </Typography>
        </Grid>
      </Grid>
    </ListItem>
  </Provider>
  )
}
export default memo(ViewItem);