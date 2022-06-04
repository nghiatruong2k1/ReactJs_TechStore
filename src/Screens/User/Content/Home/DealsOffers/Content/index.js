import {memo,useContext,useEffect,forwardRef,useMemo} from 'react';
import { useTheme } from '@mui/material/styles';
import {Box,Grid} from '@mui/material/';
import {DealContext} from "../provider";

import {ViewContent} from "../../../../../../Components/"
import Slider from "react-slick";

import ProductItem from "../Product/";



function Content({children,...props},ref){
  const {state,dispath} = useContext(DealContext);
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
      swipeToSlide:true,
      responsive: [
        {
          breakpoint: theme.breakpoints.values.xl,
          settings: {
            slidesToShow: 5
          }
        },{
          breakpoint: theme.breakpoints.values.lg,
          settings: {
            slidesToShow: 4
          }
        },{
          breakpoint: theme.breakpoints.values.md,
          settings: {
            slidesToShow: 3
          }
        },{
          breakpoint: theme.breakpoints.values.sm,
          settings: {
            slidesToShow: 2
          }
        },{
          breakpoint: theme.breakpoints.values.xs,
          settings: {
            slidesToShow: 1
          }
        }
      ]
    }
  },[]);

  useEffect(function(){
    ref.current && ref.current.slickGoTo(state.index / ref.current.innerSlider.state.slideCount);
  },[state.index])

  return(
  <Grid item xs {...props} px={0.5} py={0.25}>
    <Box position="relative">
      <ViewContent loading={state.isLoading} length={state.datas.length}>    
      <Slider ref={ref} 
        beforeChange={(oldIndex,newIndex)=>{
          dispath(["set_index",newIndex])
        }} 
      {...settings}>
        {
          state.datas.map(function(data,index){
            return ( 
            <div key={index}>
              <ProductItem 
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

