import { memo } from 'react';
import { Button, CircularProgress} from '@mui/material/';
import styles from './Loading.module.css';
import { useGetGlobalStateContext } from '~/states';
import clsx from 'clsx';
function LoadingComponent({ children }) {
  const { loading } = useGetGlobalStateContext();
  return (
    <>
      {loading.state > 0 && (
        <div className={clsx(styles.root)}>
          <Button variant="outlined" color="info" className={styles.button}>
            <CircularProgress color="info" className={styles.svg} />
          </Button>
        </div>
      )}
      {children}
    </>
  );
}
export default memo(LoadingComponent);
