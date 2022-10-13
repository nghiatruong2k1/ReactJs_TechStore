import { memo } from 'react';
import {
  Grid,
  Card,
  CardContent,
  CardHeader,
  Typography,
} from '@mui/material/';
import {} from '@mui/icons-material/';
function Description({sx, ...props }) {
  return (
    <Grid item sx={{...sx,p:1}} {...props} >
      <Card sx={{ backgroundColor: '#ffdcb0 !important', height: '100%' }}>
        <CardHeader
          px={2}
          title={<h5>Thương hiệu điện tử chất lượng hàng đầu hiện nay</h5>}
        />
        <CardContent>
          <Typography>
            Thị trường điện tử VN ngày càng phát triển, các thương hiệu lớn chạy
            đua về công nghệ với nhiều sản phẩm mới.
          </Typography>
        </CardContent>
      </Card>
    </Grid>
  );
}
export default memo(Description);
