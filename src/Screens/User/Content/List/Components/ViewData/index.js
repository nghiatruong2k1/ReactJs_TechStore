import {memo,useContext} from 'react';
import {Grid,Card,CardActions,CardContent,Typography,Skeleton,Divider} from '@mui/material/';
import {Frame,Image} from "../../../../../../Components/";
import {NavLink} from "react-router-dom";
import {getRoute} from "../../../../../../Config/Route/";
function ViewData({data,controller,loading,...props}){
  return(
    <Grid item xs={6} sm={4} md={3}>
      <Card>
        <CardActions>
          <Frame rectangle loading={loading}>
            <Image contain src={data && data.ImageUrl}/>
          </Frame>
        </CardActions>
        <Divider />
        <CardContent>
          <Typography 
             component={!loading && NavLink || "span"}
             className="h4"
             align="center"
             display = 'block'
             to={`${getRoute("user","product",controller,{alias:data && data.Alias})}`}
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