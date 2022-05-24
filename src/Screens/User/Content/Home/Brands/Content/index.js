import {memo,useContext,useRef,useEffect,forwardRef,useMemo} from 'react';
import clsx from 'clsx';
import { useTheme } from '@mui/material/styles';
import {Box,Grid,Button} from '@mui/material/';
import {} from '@mui/icons-material/';
import styles from './styles.module.css';
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
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplaySpeed:2000,
      swipeToSlide:true,
      infinite: true,
      autoplay:true,
      rows:1,
      responsive: [
        {
          breakpoint: theme.breakpoints.values.xl,
          settings: {
            rows:2,
            slidesToShow: 4
          }
        },{
          breakpoint: theme.breakpoints.values.lg,
          settings: {
            rows:2,
            slidesToShow: 3
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
  <Grid item xs {...props}>
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

