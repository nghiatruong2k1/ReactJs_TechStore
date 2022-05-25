import {memo,useContext,useEffect,forwardRef,useMemo} from 'react';
import { useTheme } from '@mui/material/styles';
import {Box,Grid} from '@mui/material/';
import {BrandsContext} from "../provider";

import {ViewContent} from "../../../../../../Components/"
import Slider from "react-slick";

import BrandsItem from "../Item/";



function Content({children,...props},ref){
  const {state,dispath} = useContext(BrandsContext);
  const theme = useTheme();
  const settings = useMemo(function(){
    return {
      arrows:false,
      dots: false,
      speed: 500,
      slidesToScroll: 1,
      autoplaySpeed:2000,
      swipeToSlide:true,
      autoplay:true,
      infinite:true
    }
  },[]);
  const responsive = useMemo(function(){
    return [
      {
        breakpoint: theme.breakpoints.values.xl,
        settings: {
          rows:2,
          slidesToShow: 1,
          slidesPerRow:4
        }
      },{
        breakpoint: theme.breakpoints.values.lg,
        settings: {
          rows:2,
          slidesToShow: 1,
          slidesPerRow:3
        }
      },{
        breakpoint: theme.breakpoints.values.md,
        settings: {
          rows:1,
          slidesToShow: 3
        }
      },{
        breakpoint: theme.breakpoints.values.sm,
        settings: {
          rows:1,
          slidesToShow: 2
        }
      },{
        breakpoint: theme.breakpoints.values.xs,
        settings: {
          rows:1,
          slidesToShow: 1
        }
      }
    ]
  },[theme])
  useEffect(function(){
    ref.current && ref.current.slickGoTo(state.index / ref.current.innerSlider.state.slideCount);
  },[state.index])
  return(
  <Grid item xs {...props}>
    <Box position="relative">
      <ViewContent loading={state.isLoading} length={state.datas.length}>    
      <Slider ref={ref} 
        beforeChange={(oldIndex,newIndex)=>{
          dispath(["set_index",newIndex])
        }} 
      responsive={responsive}
      {...settings}>
        {
          state.datas.map(function(data,index){
            return ( 
            <div key={index}>
              <BrandsItem 
                loading={state.isLoading || !Boolean(data)} 
                data={data} 
              />
            </div>
            )
          })
        }
      </Slider>
      {children}
      </ViewContent>
    </Box>
  </Grid>
  )
}
export default memo(forwardRef(Content));

