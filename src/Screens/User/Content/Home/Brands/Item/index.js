import {memo} from 'react';
import clsx from 'clsx';
import {
  Grid,
  Card,
  CardContent,
  CardActions,
  CardHeader,
  Typography,
  Skeleton
} from '@mui/material/';
import {NavLink} from "react-router-dom";
import {Frame,Image} from "../../../../../../Components/";
import {} from '@mui/icons-material/';
import styles from './styles.module.css';
function Item({data,loading,...props}){
  const route = global.config.useRoute();
  return(
    <Grid item {...props}>
      <Card sx={{height:"100%"}}>
        <CardHeader 
          title={
            <Typography
              className="h5"
              component={ (!loading && Boolean(data)) && NavLink || "span" }
              to={(!loading && Boolean(data)) 
                && `${route.user.product.brand}/${data.Alias}` || "/"
              }
            >
              {
                (!loading && Boolean(data)) && data.Name 
                || <Skeleton variant="text" className="skeleton" />
              }
            </Typography>
          }
        />
        <CardContent>
          <Frame rectangle loading={loading || !Boolean(data)}>
            <Image contain src={data && data.ImageUrl}/>
          </Frame>  
        </CardContent>
      </Card>
  </Grid>
  )
}
export default memo(Item);