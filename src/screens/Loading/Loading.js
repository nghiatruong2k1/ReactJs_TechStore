import {memo} from 'react';
import { Button, CircularProgress} from '@mui/material/';
import clsx from 'clsx';
import styles from './Loading.module.css';
import { useInitLoading } from '~/hooks/Loading';
import Provider from './provider';
function GlobalLoadingComponent({ children }) {
  const [isLoading,handle] = useInitLoading();
  return (
    <Provider value={handle}>
      {true && (
        <div className={clsx(styles.root)}>
          <Button variant="outlined" color="info" className={styles.button}>
            <CircularProgress color="info" className={styles.svg} />
          </Button>
        </div>
      )}
      {children}
    </Provider>
  );
}
export default memo(GlobalLoadingComponent);
