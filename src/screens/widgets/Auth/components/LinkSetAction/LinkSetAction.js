import { memo, useContext } from 'react';
import { Box, Link } from '@mui/material/';
import styles from './LinkSetAction.module.css';
import { useGetAuth } from '~/hooks/Auth';
function LinkSetAction({ text, component, beforeText, afterText, action }) {
  const { dispath  } = useGetAuth();
  return (
    <Box component={component || 'span'}>
      {beforeText && <>{beforeText} </>}
      <Link
        underline="none"
        className={styles.link}
        onClick={() => {
          dispath([action]);
        }}
      >
        {text}
      </Link>
      {afterText && <> {afterText}</>}
    </Box>
  );
}
export default memo(LinkSetAction);
