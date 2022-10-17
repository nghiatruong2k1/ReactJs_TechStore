import { memo, useContext } from 'react';
import { Box} from '@mui/material/';
import styles from './LinkSetAction.module.css';
import { useGetAuth } from '~/hooks/Auth';
function LinkSetAction({ text, component, beforeText, afterText, action }) {
  const { dispath  } = useGetAuth();
  return (
    <Box component={component || 'span'}>
      {beforeText}
      <a
        className={styles.link}
        onClick={() => {
          dispath([action]);
        }}
      >
         {` ${text} `}
      </a>
      {afterText}
    </Box>
  );
}
export default memo(LinkSetAction);
