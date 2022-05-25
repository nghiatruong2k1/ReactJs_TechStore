import {memo,useContext,useRef,useEffect,useState,useMemo} from 'react';
import clsx from 'clsx';
import {Box,Button} from '@mui/material/';
import {} from '@mui/icons-material/';
import styles from './styles.module.css';
import {SliderContext} from "../provider";

import {Frame,Image} from "../../../../../../../Components/"
import Slider from "react-slick";


function Dots({slider,...props}){
  const {state} = useContext(SliderContext);
  const thisRef = useRef();
  const settings = useMemo(function(){
    return {
      arrows:false,
      dots: false,
      infinite: false,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
      rows:1,
      slidesPerRow:4
    }
  },[]);

  useEffect(function(){
    thisRef.current && thisRef.current.slickGoTo(state.index / thisRef.current.innerSlider.state.slideCount)
  },[state.index])
  return(
    <Box className={styles.dots} sx={{px:{xs:2,sm:4,md:8,lg:10}}}>
      <Slider ref={thisRef} {...settings}>
      {
        state.datas.map(function(item,index){
          return(
            <Frame 
              px={1} py={2} 
              rectangle 
              key={index} 
              containerProps={{
                className:clsx(styles.dotButton,{[styles.dotActive]:index == state.index}),
                onClick:(e)=>{
                  slider && slider.slickGoTo(index)
                }
              }}
            >
              <Image cover src={item.src}/>
            </Frame>
          )
        })
      }
      </Slider>
    </Box>
  )
}
export default memo(Dots);