import { forwardRef, memo } from 'react';
import clsx from 'clsx';
import PropTypes from 'prop-types';
import styles from './Frame.module.css';

import { Skeleton, Box } from '@mui/material/';

function FrameComponent({
  loading,
  children,
  className,
  containerProps,
  contentProps,
  variant,
  ...props
}) {
  return (
    <Box className={ clsx(styles.frame,className) } {...props}>
      <Box {...containerProps} className={clsx(styles.container,styles[variant],containerProps.className)}>
        <Box className={styles.content}>{children}</Box>
        {loading && <Skeleton className={styles.skeleton} />}
      </Box>
    </Box>
  );
}
FrameComponent.defaultProps = {
  variant: 'auto',
  containerProps:{},
  sx: {},
  classes: {},
};
FrameComponent.propTypes = {
  variant: PropTypes.oneOf(['auto', 'rectangle', 'square', 'circle']),
  containerProps:PropTypes.object,
  sx: PropTypes.object,
  classes: PropTypes.object,
};
export default memo(FrameComponent);
