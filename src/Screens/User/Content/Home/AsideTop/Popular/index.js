import {memo,useContext,useRef,useEffect,forwardRef,useMemo} from 'react';
import clsx from 'clsx';
import { useTheme } from '@mui/material/styles';
import {LoadingButton} from "@mui/lab/";
import {Box,Grid,Stack,Button,Typography,List,ListItem,Skeleton} from '@mui/material/';
import {NavLink} from "react-router-dom";
import Slider from "react-slick";


import styles from './styles.module.css';
import {Frame,Image} from "../../../../../../Components/";
import {getRoute} from "../../../../../../Config/Route/";
import {useGet} from "../../../../../../Config/Fetch/";
import {ViewContent} from "../../../../../../Components/";


import PopularItem from "./Item/";


function Populars({...props},ref){
  const [state] = useGet([],function(){
    return {
      api:"api/category/popular",
      onThen:(({data})=>{
        return Array.isArray(data) && data || [];
      }),onStart:(()=>{
        return Array(3).fill(undefined);
      })
    }
  },[],"Home Aside Category Populars");
  const theme = useTheme();
  const settings = useMemo(function(){
    return {
      arrows:false,
      dots: false,
      speed: 500,
      slidesToScroll: 1,
      autoplaySpeed:2000,
      slidesToShow: 2,
      infinite: true,
      autoplay:true,
      swipeToSlide:true,
      vertical:false,
      responsive: [
        {
          breakpoint: theme.breakpoints.values.xl,
          settings:{
            vertical:true
          }
        },{
          breakpoint: theme.breakpoints.values.lg,
          settings:{
            vertical:true
          }
        },{
          breakpoint: theme.breakpoints.values.md,
          settings:{
            vertical:false
          }
        },{
          breakpoint: theme.breakpoints.values.sm,
          settings:{
            vertical:false
          }
        }
      ]
    }
  },[]);
  return(
  <Grid item xs px={0} {...props} >
    <Typography className={styles.title} component="h6">Danh mục nỗi bật</Typography>
    <Box position="relative">
      <ViewContent loading={state.isLoading} length={state.data.length}>    
        <Slider ref={ref} {...settings}>
          {
            state.data.map(function(data,index){
              return (
                <PopularItem 
                  key={index}
                  loading={state.isLoading || !Boolean(data)} 
                  data={data} 
                />
              )
            })
          }
        </Slider>
      </ViewContent>
    </Box>
  </Grid>
  )
}
export default memo(forwardRef(Populars));

