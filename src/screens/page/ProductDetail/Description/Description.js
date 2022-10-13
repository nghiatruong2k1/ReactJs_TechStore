import { memo, useEffect, useRef } from 'react';
import {
  Grid,
  Box,
  Card,
  CardContent,
  CardActions,
  Button,
  Skeleton,
} from '@mui/material/';
import styles from './Description.module.css';
import { useDisclosure } from '@mantine/hooks';
import clsx from 'clsx';
function Description({ fullDes, loading, ...props }) {
  const fullRef = useRef();
  const [isFull,{toggle}] = useDisclosure(false)
  useEffect(
    function () {
      if (fullDes && fullRef.current) {
        fullRef.current.innerHTML = fullDes;
      }
    },
    [fullDes],
  );
  return (
    <Grid item {...props}>
      <Card className={styles.root}>
        <CardContent className={ clsx(styles.content,{[styles.full]:isFull})}>
          <Box className={styles.fulldes} ref={fullRef}></Box>
          {loading && <Skeleton className={styles.skeleton} variant="text" width="100%" height="20em" />}
        </CardContent>
        <CardActions sx={{ justifyContent: 'center' }}>
          <Button className={styles.button} onClick={toggle} sx={{ px: 5 }} variant="contained">
            {isFull && "Ẩn bớt" || "Xem chi tiết" }
          </Button>
        </CardActions>
      </Card>
    </Grid>
  );
}
export default memo(Description);
