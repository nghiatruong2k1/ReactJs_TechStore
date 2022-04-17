import {memo,useContext,forwardRef} from 'react';
import clsx from 'clsx';
import {} from '@mui/material/';
import {} from '@mui/icons-material/';
import styles from './styles.module.css';


import {Frame,Image} from "../../../../../../../Components/"
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import {SliderContext} from "../provider";
function Images({...props},ref){
  const {state,dispath} = useContext(SliderContext)
  const settings = {
    arrows:false,
    dots: false,
    infinite: true,
    autoplay:true,
    autoplaySpeed:2000,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    rows:1,
    beforeChange:function(oldIndex,newIndex){
      dispath({key:"set",payload:{index:newIndex}})
    }
  };
  return(
    <Slider ref={ref} {...settings}>
      {
        state.datas.map(function(item,index){
          return(
            <Frame px={1} className={styles.item} rectangle key={index}>
              <Image cover src={item.src}/>
            </Frame>
          )
        })
      }  
    </Slider>
  )
}
export default memo(forwardRef(Images));