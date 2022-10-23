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
  containerProps,
  variant,
  height,
  ...props
}) {
  return (
    <Box className={clsx(styles.frame, className)} {...props}>
      <Box
        {...containerProps}
        className={clsx(
          styles.container,
          styles[variant],
          containerProps.className
        )}
        data-height={height}
        sx={{'--frame-height':height}}
      >
        <Box {...contentProps} className={clsx(styles.content,contentProps.className)}>{children}</Box>
        {loading && <Skeleton className={styles.skeleton} />}
      </Box>
    </Box>
  );
}
FrameComponent.defaultProps = {
  variant: 'auto',
  sx: {},
  classes: {},
  containerProps:{},
  contentProps:{}
};
FrameComponent.propTypes = {
  variant: PropTypes.oneOf(['auto', 'rectangle', 'square', 'circle']),
  sx: PropTypes.object,
  classes: PropTypes.object,
};
export default memo(FrameComponent);
