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
import styles from './Item.module.css';
import { ProductController } from '~/controllers';
function Item({ data, loading }) {
  return (
    <Box sx={{ p: 1 }}>
      <Card className={styles.card}>
        <CardHeader
          sx={{ py: 1 }}
          title={
            <Typography
              className="h5"
              component={(!loading && NavLink) || 'span'}
              to={
                !loading &&
                ProductController.brand.getAction({
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
        <CardContent sx={{ py: 1 }}>
          <Frame height={'5em'} variant="circle" loading={loading}>
            <Image fit="contain" src={data && data.ImageUrl} />
          </Frame>
        </CardContent>
        <div></div>
      </Card>
    </Box>
  );
}
export default memo(Item);
