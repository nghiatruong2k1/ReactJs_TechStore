import {memo,useMemo} from 'react';
import clsx from 'clsx';
import {LoadingButton} from "@mui/lab/";
import {Box,Grid,Card,CardContent,useMediaQuery,Typography,Skeleton} from '@mui/material/';
import {NavLink} from "react-router-dom";
import {Frame,Image} from "../../../../../../../Components/";
import {getRoute} from "../../../../../../../Config/Route/";
function PopularItem({data,loading,...props}){
  const isMd = useMediaQuery((theme)=>(theme.breakpoints.down("ls")));
  const to = useMemo(function(){
    if(loading){
      if(data){
        return `${getRoute("user","product","category",{alias:data.Alias})}`
      }
    }
    return "#"
  },[data,loading])
  return(
    <Box p={0.5} {...props}>
      <Card component={Grid} container 
        sx={{ width:'100%',m:0,height:'100%'}}
        variant="outlined"
        alignItems="center"
      >
        { !isMd &&(<>
          <CardContent component={Grid} item xs={12} sm={8} md={7}>
            <Typography mb={1} >
                {
                  !loading && (data.Name || "") 
                  || (<Skeleton variant="text" className="skeleton"/>)
                }
            </Typography>
            <LoadingButton 
              variant="contained" 
              loading={loading}
              component={(loading) && NavLink || "button"} 
              color="info"
              to={to}
              sx={{px:{xs:0.5,sm:1,md:1.5,lg:2},py:{xs:0.5,md:1}}}
            >Xem ngay
            </LoadingButton>
          </CardContent> 
        </>)}
        <CardContent component={Grid} item xs={12} sm={4} md={5}>
          <Frame square loading={loading}>
            <Image contain src={data && data.ImageUrl}/>
          </Frame>
        </CardContent>
      </Card>
    </Box>
  )
}
export default memo(PopularItem);