import {memo,Fragment} from 'react';
import {formatNumber} from "../../../../../../../../Config/Format";
import {Grid,Typography,Skeleton} from '@mui/material/';
function PriceComponent({loading,price,...props}){
    return (
    <Grid item {...props}> 
        <Typography>
          {
            !loading && (formatNumber(price,3,0) + " đ")
            ||(<Skeleton className="skeleton" />)
          }
        </Typography>
      </Grid>
    )
};export default memo(PriceComponent)