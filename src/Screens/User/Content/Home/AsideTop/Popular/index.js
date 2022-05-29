import {memo,useRef,useMemo} from 'react';
import { useTheme } from '@mui/material/styles';
import {Box,Grid,Typography} from '@mui/material/';
import Slider from "react-slick";


import styles from './styles.module.css';
import {useGet} from "../../../../../../Config/Fetch/";
import {ViewContent} from "../../../../../../Components/";


import PopularItem from "./Item/";


function Populars({...props}){
  const thisRef = useRef();
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
      infinite: true,
      autoplay:true,
      swipeToSlide:true
    }
  },[]);
  const responsive = useMemo(function(){
    return [
      {
        breakpoint: theme.breakpoints.values.xl,
        settings:{
          vertical: true,
          verticalSwiping: true,
          slidesToShow: 2
        }
      },{
        breakpoint: theme.breakpoints.values.lg,
        settings:{
          vertical: true,
          verticalSwiping: true,
          slidesToShow: 2
        }
      },{
        breakpoint: theme.breakpoints.values.md,
        settings:{
          vertical:false,
          verticalSwiping: false,
          slidesToShow: 2
        }
      },{
        breakpoint: theme.breakpoints.values.sm,
        settings:{
          vertical:false,
          verticalSwiping: false,
          slidesToShow: 2
        }
      },{
        breakpoint: 200,
        settings:{
          vertical:false,
          verticalSwiping: false,
          slidesToShow: 2
        }
      },{
        breakpoint: theme.breakpoints.values.xs,
        settings:{
          vertical:false,
          verticalSwiping: false,
          slidesToShow: 1
        }
      }
    ]
  },[theme])
  return(
  <Grid item xs px={0} {...props} >
    <Typography className={styles.title} component="h6">Danh mục nỗi bật</Typography>
    <Box position="relative">
      <ViewContent loading={state.isLoading} length={state.data.length}>    
        <Slider ref={thisRef} {...settings} responsive={responsive}>
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
export default memo(Populars);

