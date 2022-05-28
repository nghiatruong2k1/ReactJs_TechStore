import {memo,useContext} from 'react';
import clsx from 'clsx';
import {Box,IconButton} from '@mui/material/';
import {} from '@mui/icons-material/';
import styles from './styles.module.css';
import {SliderContext} from "../provider";
function Arrows({slider,...props}){
  return(
    <>
      <IconButton
        onClick={()=>{slider && slider.slickPrev();}}
        className={clsx(styles.arrow,styles.left)}>
        <span className="fas fa-chevron-left"/>
      </IconButton>
      <IconButton
        onClick={()=>{slider && slider.slickNext();}}
        className={clsx(styles.arrow,styles.right)}>
        <span className="fas fa-chevron-right"/>
      </IconButton>
    </>
  )
}
export default memo(Arrows);