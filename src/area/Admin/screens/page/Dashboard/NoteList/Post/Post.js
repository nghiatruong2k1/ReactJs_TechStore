import { memo } from 'react';
import { Card, CardContent, Typography, Divider, Grid } from '@mui/material/';
import { NavLink } from 'react-router-dom';
import styles from './Post.module.css';
function Post({to, ...props }) {
  return (
    <Grid item {...props}>
      <Card className={styles.card}>
        <CardContent className={styles.header} sx={{py:0.2}}>
          <Typography
            component={to && NavLink || 'span'}
            to={to || "/404"}
            className={styles.title}
          >
            Ghi chú
          </Typography>
        </CardContent>
        <Divider />
        <CardContent>
          <Typography className={styles.text}>Nội dung ghi chú</Typography>
        </CardContent>
        <div></div>
      </Card>
    </Grid>
  );
}
export default memo(Post);
