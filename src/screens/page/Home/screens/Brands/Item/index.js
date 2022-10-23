import { memo } from 'react';
import clsx from 'clsx';
import {
  Box,
  Card,
  CardContent,
  CardHeader,
  Typography,
  Skeleton,
} from '@mui/material/';
import { NavLink } from 'react-router-dom';
import { Frame, Image } from '~/components';
import { routers, getAction } from '~/config/Router';
import styles from './Item.module.css';
function Item({ data, loading }) {
  return (
    <Box sx={{ p: 1 }}>
      <Card sx={styles.card}>
        <CardHeader
          sx={{ py: 1 }}
          title={
            <Typography
              className="h5"
              component={(!loading && NavLink) || 'span'}
              to={
                !loading &&
                routers.product.brand.getAction({
                  alias: data && data.Alias,
                })
              }
            >
              {(!loading && data.Name) || (
                <Skeleton variant="text" className="skeleton" />
              )}
            </Typography>
          }
        />
        <CardContent sx={{ py: 1, px: 5 }}>
          <Frame variant="circle" loading={loading}>
            <Image fit="contain" src={data && data.ImageUrl} />
          </Frame>
        </CardContent>
      </Card>
    </Box>
  );
}
export default memo(Item);
