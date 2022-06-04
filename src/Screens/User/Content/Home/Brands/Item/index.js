import {memo} from 'react';
import clsx from 'clsx';
import {
  Box,
  Card,
  CardContent,
  CardHeader,
  Typography,
  Skeleton
} from '@mui/material/';
import {NavLink} from "react-router-dom";
import {Frame,Image} from "../../../../../../Components/";
import {getRoute} from "../../../../../../Config/Route/";
import useStyles from './styles';
function Item({data,loading,...props}){
  const styles = useStyles();
  return(
    <Box sx={{p:1}}>
      <Card sx={styles.card}>
        <CardHeader 
          sx={{py:1}}
          title={
            <Typography
              className="h5"
              component={ !loading && NavLink || "span" }
              to={!loading  && `${getRoute("user","product","brand",{alias:data && data.Alias})}` || "/"
              }
            >
              {
                !loading && data.Name 
                || <Skeleton variant="text" className="skeleton" />
              }
            </Typography>
          }
        />
        <CardContent sx={{py:1}}>
          <Frame rectangle loading={loading}>
            <Image contain src={data && data.ImageUrl}/>
          </Frame>  
        </CardContent>
      </Card>
  </Box>
  )
}
export default memo(Item);