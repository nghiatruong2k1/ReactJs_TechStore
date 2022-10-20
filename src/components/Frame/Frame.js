import {  memo } from 'react';
import clsx from 'clsx';
import PropTypes from 'prop-types';
import styles from './Frame.module.css';

import { Skeleton, Box } from '@mui/material/';

function FrameComponent({
  loading,
  children,
  className,
  contentProps,
  variant,
  height,
  ...props
}) {
  return (
    <Box className={clsx(styles.frame, className)} {...props}>
      <Box
        className={clsx(
          styles.container,
          styles[variant]
        )}
        sx={{'--frame-height':height}}
      >
        <Box className={styles.content}>{children}</Box>
        {loading && <Skeleton className={styles.skeleton} />}
      </Box>
    </Box>
  );
}
FrameComponent.defaultProps = {
  variant: 'auto',
  sx: {},
  classes: {},
};
FrameComponent.propTypes = {
  variant: PropTypes.oneOf(['auto', 'rectangle', 'square', 'circle']),
  sx: PropTypes.object,
  classes: PropTypes.object,
};
export default memo(FrameComponent);
