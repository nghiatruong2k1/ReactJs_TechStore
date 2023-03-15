import { memo } from 'react';
import {
  Grid,
  Card,
  CardActions,
  CardContent,
  Typography,
  Skeleton,
  Divider,
} from '@mui/material/';
import { NavLink } from 'react-router-dom';
import { Frame, Image } from '~/components';
import { ProductController } from '~/controllers';
function ViewItem({ data, controller, loading }) {
  return (
    <Grid item xs={6} sm={4} md={3} >
      <Card sx={{height:'100%'}}>
        <CardActions>
          <Frame height="5em" variant='circle' loading={loading}>
            <Image fit="contain" src={data && data.ImageUrl} />
          </Frame>
        </CardActions>
        <Divider />
        <CardContent>
          <Typography
            component={(!loading && NavLink) || 'span'}
            className="h4"
            align="center"
            display="block"
           to={ProductController[controller].getAction({alias: data && data.Alias})}
          >
            {!loading ? data.Name : <Skeleton />}
          </Typography>
          <Typography>
            {!loading ? (
              data.ShortDes
            ) : (
              <Skeleton />
            )}
          </Typography>
        </CardContent>
      </Card>
    </Grid>
  );
}
export default memo(ViewItem);
