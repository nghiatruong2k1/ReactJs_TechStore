import {memo,useContext,forwardRef,useState,useEffect,useMemo} from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';
import {Paper} from '@mui/material/';

import {Frame,Image} from "../../../../../../../Components/"
import Slider from "react-slick";


import {SliderContext} from "../provider";
function Images({...props},ref){
  const {state,dispath} = useContext(SliderContext)
  const settings = useMemo(function(){
    return {
      arrows:false,
      dots: false,
      infinite: true,
      autoplay:true,
      autoplaySpeed:2000,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
      rows:1,
      slidesPerRow:1,
      beforeChange:function(oldIndex,newIndex){
        dispath({key:"set",payload:{index:newIndex}})
      }
    }
  },[]);
  return(
    <Slider ref={ref} {...settings}>
      {
        state.datas.map(function(item,index){
          return(
            <Frame containerProps={{component:Paper,variant:"outlined"}} className={styles.item} rectangle key={index}>
              <Image cover src={item.src}/>
            </Frame>
          )
        })
      }  
    </Slider>
  )
}
export default memo(forwardRef(Images));