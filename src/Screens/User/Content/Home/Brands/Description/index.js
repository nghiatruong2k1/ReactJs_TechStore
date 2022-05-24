import {memo} from 'react';
import clsx from 'clsx';
import {Grid,Card,CardContent,CardActions,CardHeader,Typography} from '@mui/material/';
import {} from '@mui/icons-material/';
import styles from './styles.module.css';
function Description({sx,...props}){
  return(
  <Grid item sx={{p:1,...sx}} xs {...props}>
    <Card sx={{backgroundColor:"#ffdcb0",height:"100%"}}>
      <CardHeader
        px={2}
        title={<h5>Thương hiệu điện tử chất lượng hàng đầu hiện nay</h5>}
      />
      <CardContent>
        <Typography>
          Thị trường điện tử VN ngày càng phát triển, các thương hiệu lớn chạy đua về công nghệ với nhiều sản phẩm mới.
        </Typography>
      </CardContent>
    </Card>
  </Grid>
  )
}
export default memo(Description);