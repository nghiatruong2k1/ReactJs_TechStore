import {memo} from 'react';
import clsx from 'clsx';
import {Grid,Card,CardContent,Stack,List} from '@mui/material/';
import Categories from './Categories';
import Brands from './Brands';
function Navbar({...props}){
  return(
    <Grid {...props}>
      <Card sx={{width:"100%"}}>
        <CardContent sx={{px:1,py:0.5}}>
          <List component={Stack} sx={{p:0}} direction={"row"}>
            <Categories />
            <Brands />
          </List>
        </CardContent>
        <CardContent sx={{display:'none'}}/>
      </Card>
    </Grid>
  )
}
export default memo(Navbar);