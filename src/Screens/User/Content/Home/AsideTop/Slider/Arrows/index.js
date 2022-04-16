import {memo} from 'react';
import clsx from 'clsx';
import {Box,IconButton} from '@mui/material/';
import {} from '@mui/icons-material/';
import styles from './styles.module.css';
function Arrows({sliderRef,...props}){
  return(
    <>
      <IconButton
        onClick={()=>{sliderRef && sliderRef.slickPrev()}}
        className={clsx(styles.arrow,styles.left)}>
        <span className="fas fa-chevron-left"/>
      </IconButton>
      <IconButton
        onClick={()=>{sliderRef && sliderRef.slickNext()}}
        className={clsx(styles.arrow,styles.right)}>
        <span className="fas fa-chevron-right"/>
      </IconButton>
    </>
  )
}
export default memo(Arrows);