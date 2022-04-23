import {memo,useState} from 'react';
import clsx from 'clsx';
import {
  Tooltip,
  IconButton,
  Grid
} from '@mui/material/';
import {
  Feed,Add,Remove
} from '@mui/icons-material/';



import PostCard from "./Post/";
import styles from './styles.module.css';

import {Accordion} from "../../../../../Components/"
function News({...props}){
  const [isOpen,setOpen] = useState(true);
  function toggleOpen(event){
    setOpen(!isOpen)
  }
  return(
    <Accordion
      title="NopCommerce News"
      {...props}
    >
      <Grid container columnSpacing={2} rowSpacing={2}>
            {
              [1,2,3].map(function(data,index){
                return(
                  <PostCard xs={12} md={6} lg={4} xxl={3} key={index} />
                )
              })
            }
      </Grid>
    </Accordion>
      
  )
}
export default memo(News);