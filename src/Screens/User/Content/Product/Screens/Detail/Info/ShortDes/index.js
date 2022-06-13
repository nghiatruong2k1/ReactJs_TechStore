import {memo} from 'react';
import {Typography,Skeleton} from '@mui/material/';
function ShortDes({loading,shortDes,...props}){
  if(!loading){
    return(
        <Typography>{shortDes}</Typography>
    )
  }else {
    return(
      <Skeleton variant="text" width="100%" height = '10em'  />
    )
  } 
}
export default memo(ShortDes);