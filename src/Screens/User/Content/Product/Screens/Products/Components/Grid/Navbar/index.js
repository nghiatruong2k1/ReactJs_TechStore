import {memo} from 'react';
import clsx from 'clsx';
import {Grid,Card,CardContent} from '@mui/material/';
function Navbar({...props}){
  return(
    <Grid {...props}>
      <Card sx={{width:"100%"}}>
        <CardContent>

        </CardContent>
      </Card>
    </Grid>
  )
}
export default memo(Navbar);