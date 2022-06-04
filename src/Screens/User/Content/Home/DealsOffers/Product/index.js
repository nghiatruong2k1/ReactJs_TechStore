import {memo,useContext} from 'react';
import clsx from 'clsx';
import {
  Box,
  Divider,
  Card,
  CardActions,
  CardContent,
  Badge,
  Rating
} from '@mui/material/';
import {
  Star
} from '@mui/icons-material/';
import {Frame,Image} from "../../../../../../Components/";
import useStyles from './styles';
import DataName from "./Name/";
import DataBookmask from "./Bookmask/";

function Product({data,loading,...props}){
  const styles = useStyles();
  return(
    <Box px={0.5} py={1} sx={{cursor:"grab"}}>
      <Card sx={styles.card}>
        <CardActions>
          <Frame square loading={loading}>
            <DataBookmask price={data && data.Price} salePrice={data && data.SalePrice}/>
            <Image contain src={data && data.ImageUrl}/>
          </Frame>
        </CardActions>
        <Divider />
        <CardContent align="center" >
            <DataName loading={loading} name={data && data.Name} alias={data && data.Alias}/>
            <Rating
              value={data && data.Rating || 0}
              readOnly
              size="small" 
              precision={0.1}
              max={5}
              emptyIcon={<Star />}
            />
        </CardContent>
       </Card>
    </Box>
  )
}
export default memo(Product);