import {memo,useContext} from 'react';
import clsx from 'clsx';
import {Grid,Card,CardActions,CardContent,Typography,Skeleton} from '@mui/material/';
import {Frame,Image} from "../../../../../Components/";
import {NavLink} from "react-router-dom";
function ViewData({data,controller,loading,...props}){
  const {getRoute} = global.config.useRoute();
  return(
    <Grid item xs={3}>
      <Card>
        <CardActions>
          <Frame rectangle loading={loading}>
            <Image contain src={data && data.ImageUrl}/>
          </Frame>
        </CardActions>
        <CardContent>
          <Typography 
             component={!loading && NavLink || "span"}
             className="h4"
             align="center"
             display = 'block'
             to={`${getRoute("user","product",controller)}/${data && data.Alias}`}
          >
            {!loading ? data.Name : <Skeleton variant="text" className="skeleton"/>}
          </Typography>
          <Typography 
             component="p"
             display = 'block'
          >
            {!loading ? data.shortDes : <Skeleton variant="text" className="skeleton"/>}
          </Typography>
        </CardContent>
      </Card>
    </Grid>
  )
}
export default memo(ViewData);