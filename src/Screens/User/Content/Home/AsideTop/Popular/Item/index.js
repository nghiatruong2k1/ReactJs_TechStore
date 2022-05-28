import {memo,useMemo} from 'react';
import clsx from 'clsx';
import {LoadingButton} from "@mui/lab/";
import {Box,Grid,Card,CardContent,CardActions,Button,Typography,Skeleton} from '@mui/material/';
import styles from './styles.module.css';
import {NavLink} from "react-router-dom";
import {Frame,Image} from "../../../../../../../Components/";
import {getRoute} from "../../../../../../../Config/Route/";
import {useGet} from "../../../../../../../Config/Fetch/";
function PopularItem({data,loading,...props}){
  const to = useMemo(function(){
    if(loading){
      if(data){
        return `${getRoute("user","product","category",{alias:data.Alias})}`
      }
    }
    return "#"
  },[data,loading])
  return(
    <Box p={0.5}>
      <Card component={Grid} container 
        sx={{ width:'100%',m:0}} 
        columnSpacing={1}
        variant="outlined"
        alignItems="center"
      >
        <CardContent component={Grid} item xs={7} sm={8}>
          <Typography mb={1} className={styles.name}  >
              {
                !loading ? (<NavLink to={to}>{data.Name}</NavLink>) 
                : (<Skeleton variant="text" className="skeleton"/>)
              }
          </Typography>
          <LoadingButton 
            variant="contained" 
            loading={loading}
            component={(loading) && NavLink || "button"} 
            color="info"
            className={styles.button}
            to={to}
            sx={{px:{xs:0.5,sm:1,md:1.5,lg:2},py:{xs:0.5,md:1}}}
          >Xem ngay
          </LoadingButton>
        </CardContent> 
        <CardContent component={Grid} item xs={5} sm={4}>
          <Frame square loading={loading}>
            <Image contain src={data && data.ImageUrl}/>
          </Frame>
        </CardContent>
      </Card>
    </Box>
  )
}
export default memo(PopularItem);