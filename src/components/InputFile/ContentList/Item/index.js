import { memo } from 'react';
import { Grid, Card, CardContent, Radio, Divider } from '@mui/material';
import styles from './Item.module.css';
import { Frame, Image } from '~/components';
function ItemComponent({ data, loading, active,onClick, ...props }) {
  return (
    <Grid item xs={6} md={4} {...props}>
      <Card className={styles.card}>
        <CardContent sx={{ p: 0 }}>
          <Radio className={styles.radio} checked={active || false} onChange={()=>{onClick && onClick(data)}}/>
        </CardContent>
        <Divider />
        <CardContent sx={{ p: 1 }}>
          <Frame variant={'square'} loading={loading}>
            <Image fit={'contain'} src={data && data.Url} />
          </Frame>
        </CardContent>
        <div></div>
      </Card>
    </Grid>
  );
}
export default memo(ItemComponent);
