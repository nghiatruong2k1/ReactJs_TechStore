import {memo} from 'react';
import clsx from 'clsx';
import {Grid,Card,CardActions,CardContent} from '@mui/material/';
import PictureView from "./View/";
import styles from './styles.module.css';
function DetailPicture({...props}){
  return(
    <Grid item {...props}>
      <Card>
        <CardContent>
          <PictureView />
        </CardContent>
        <CardActions>
        </CardActions>
      </Card>
    </Grid>
  )
}
export default memo(DetailPicture);