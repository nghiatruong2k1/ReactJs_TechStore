import { memo, useEffect, useReducer } from 'react';
import clsx from 'clsx';
import {
  Card,
  CardContent,
  CardActions,
  Typography,
  Divider,
  Grid,
  Button,
} from '@mui/material/';
import { ArrowForward } from '@mui/icons-material/';
import { NavLink } from 'react-router-dom';
import styles from './CardStatistic.module.css';
import { initState, reducerState, initCase } from './init';
function CardStatistic({ title, to,icon, handleGetData, ...props }) {
  const [{ data, isLoading }, dispath] = useReducer(reducerState, initState);
  useEffect(() => {
    if (handleGetData) {
      dispath([initCase.SET_DATA]);
      dispath([initCase.SET_LOADING, true]);
      return handleGetData({},(data) => {
        dispath([initCase.SET_DATA, data]);
        dispath([initCase.SET_LOADING, false]);
      });
    }
  }, []);
  return (
    <Grid item {...props}>
      <Card className={clsx(styles.card)}>
        <CardContent className={styles.body}>
          <Typography variant="h3" className={styles.number}>
            { (isLoading && 0) || data || 0}
          </Typography>
          <Typography className={styles.title}>{title}</Typography>
          <span className={styles.icon}>{icon}</span>
        </CardContent>
        <Divider />
        <CardActions className={styles.footer} disableSpacing>
          <Button
            component={(!isLoading && to && NavLink) || 'span'}
            className={styles.button}
            to={to ?? '/404'}
            size="small"
            endIcon={<ArrowForward />}
          >
            Xem chi tiết
          </Button>
        </CardActions>
      </Card>
    </Grid>
  );
}
export default memo(CardStatistic);
