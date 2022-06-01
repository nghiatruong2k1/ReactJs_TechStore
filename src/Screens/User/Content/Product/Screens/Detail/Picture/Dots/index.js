import {memo,useContext,useRef,useEffect,useState,useMemo} from 'react';
import clsx from 'clsx';
import {Box,Paper} from '@mui/material/';
import {} from '@mui/icons-material/';
import styles from './styles.module.css';
import {SliderContext} from "../provider";

import {Frame,Image} from "../../../../../../../../Components/"
import Slider from "react-slick";


function Dots({slider,images,...props}){
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
    <Box className={styles.dots} sx={{px:{xs:4,sm:6,md:8,lg:8}}}>
      <Slider ref={thisRef} {...settings}>
      {
        images.map(function(item,index){
          return(
            <Box sx={{p:0.5}}>
              <Paper variant="outlined" className={clsx(styles.dot,{[styles.dotActive]:index == state.index})}>
                <Frame  
                  rectangle  
                  key={index} 
                  containerProps={{
                    className:clsx(styles.dotButton),
                    onClick:(e)=>{
                      slider && slider.slickGoTo(index)
                    }
                  }}
                >
                  <Image contain src={item.ImageUrl}/>
                </Frame>
              </Paper>
            </Box>
          )
        })
      }
      </Slider>
    </Box>
  )
}
export default memo(Dots);