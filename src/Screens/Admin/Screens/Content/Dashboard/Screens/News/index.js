import {memo,useState} from 'react';
import {
  Grid
} from '@mui/material/';


import PostCard from "./Post/";

import {Accordion} from "../../../../../Components/"
function News({...props}){
  return(
    <Accordion
      title="Ghi chú"
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