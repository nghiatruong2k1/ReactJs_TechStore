import {memo,useContext} from 'react';
import clsx from 'clsx';
import {Grid,Card,CardActions,CardContent,Typography,Skeleton} from '@mui/material/';
import styles from './styles.module.css';
import {Frame,Image} from "../../../../../Components/";
import {ListContext} from "../provider";
import {NavLink} from "react-router-dom";
function ViewData({data,action,loading,...props}){
  const {getRoute} = global.config.useRoute();
  return(
    <Grid item xs={3}>
      <Card>
        <CardActions>
          <Frame rectangle loading={!Boolean(data) || loading}>
            <Image contain src={data && data.ImageUrl}/>
          </Frame>
        </CardActions>
        <CardContent>
          <Typography 
             component={(Boolean(data) && !loading) && NavLink}
             className="h4"
             align="center"
             display = 'block'
             to={`${getRoute("user","product",action)}/${data && data.Alias}`}
          >
            {(Boolean(data) && !loading) ? data.Name : <Skeleton variant="text" className="skeleton"/>}
          </Typography>
          <Typography 
             component="p"
             display = 'block'
          >
            {(Boolean(data) && !loading) ? data.shortDes : <Skeleton variant="text" className="skeleton"/>}
          </Typography>
        </CardContent>
      </Card>
    </Grid>
  )
}
export default memo(ViewData);