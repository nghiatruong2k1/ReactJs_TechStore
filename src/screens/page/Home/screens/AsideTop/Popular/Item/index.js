import { memo } from 'react';
import { LoadingButton } from '@mui/lab/';
import {
  Box,
  Grid,
  Card,
  CardContent,
  useMediaQuery,
  Typography,
  Skeleton,
} from '@mui/material/';
import { NavLink } from 'react-router-dom';
import { Frame, Image } from '~/components';
import styles from './Item.module.css';
function PopularItem({ data, loading, ...props }) {
  return (
    <Box p={0.5} {...props}>
      <Card
        component={Grid}
        container
        sx={styles.card}
        variant="outlined"
        alignItems="center"
      >
        <CardContent component={Grid} item xs={12} sm={8} md={7}>
          <Typography mb={1}>
            {(!loading && ((data && data.text) || '')) || (
              <Skeleton variant="text" className="skeleton" />
            )}
          </Typography>
          <LoadingButton
            variant="contained"
            loading={loading}
            className={styles.button}
            component={(!loading && NavLink) || 'button'}
            to={data && data.to}
            color='info'
          >
            Xem ngay
          </LoadingButton>
        </CardContent>
        <CardContent component={Grid} item xs={12} sm={4} md={5}>
          <Frame variant='circle' loading={loading}>
            <Image fit={'contain'} src={data && data.imgUrl} />
          </Frame>
        </CardContent>
      </Card>
    </Box>
  );
}
export default memo(PopularItem);
