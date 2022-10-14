import { memo ,useReducer} from 'react';
import { Button, CircularProgress} from '@mui/material/';
import styles from './Loading.module.css';
import clsx from 'clsx';
import { initState, reducerState,initCase } from "./init";
import Provider from './provider';
function LoadingComponent({ children }) {
  const [state,dispath] = useReducer(reducerState,initState);
  return (
    <Provider value={{state,dispath,initCase}}>
      {state > 0 && (
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
export default memo(LoadingComponent);
