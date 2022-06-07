import {memo,useReducer} from 'react';
import {
  Grid,
  ListItem,
  Tooltip,
  IconButton,
  Stack
} from '@mui/material/';

import Provider from "./provider";


import Quantity from "./Quantity";
import Price from "./Price";
import Name from "./Name";
import Image from "./Image";
import DeleteButton from "./DeleteButton";

function Product({data,loading,index,...props}){
  return(
  <Provider data={data} index={index}>
  <ListItem divider disableGutters>
    <Grid container display="grid" gap={1} sx={{
      gridTemplateColumns:"repeat(11,1fr)"
    }}>   
      <Image url={data && data.ImageUrl}loading={loading}
        sx={{
          gridColumn:{
            xs:"1 / 4",
            md:"1 / 2"
          },gridRow:{
            xs:"1 / span 4",
            md:"1 / span 1"
          }
        }}
      />
      <Name name={data && data.Name}alias={data && data.Alias} loading={loading}
        sx={{
          gridColumn:{
            xs:"4 / 12",
            sm:"4 / 9",
            md:"2 / 5"
          }
        }}
      />
      <Price price={data && data.Price} loading={loading}
        sx={{
          gridColumn:{
            xs:"4 / 12",
            sm:"4 / 9",
            md:"5 / 7"
          }
        }}
      />
      <Quantity loading={loading} 
         sx={{
          gridColumn:{
            xs:"4 / 12",
            sm:"4 / 9",
            md:"7 / 9"
          }
        }}
      />
      <Grid item sx={{
          gridColumn:{
            xs:"4 / 12",
            sm:"9 / 12"
          }
      }}>  
        <Stack direction="row">
          <Tooltip placement="top" title="Theo dõi sản phẩm">
            <IconButton>
              <i className="fa fa-heart"></i>
            </IconButton>
          </Tooltip>
          <DeleteButton />
        </Stack>
      </Grid>
    </Grid>
  </ListItem>
  </Provider>
  )
}
export default memo(Product);