import { forwardRef, memo } from 'react';
import { Box } from '@mui/material';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import styles from './ScrollArea.module.css';
import { useId } from '@mantine/hooks';
function ScrollAreaComponent(
  { hidden, isHover, id, classes, children, viewProps, contentProps, ...props }) {
  const { wrapper, view } = classes;
  const uuid = useId(id);
  return (
    <Box
      {...props}
      id={`scroll-area-${id || uuid}`}
      className={clsx(styles.wrapper, { wrapper: wrapper })}
    >
      <Box
        {...viewProps}
        className={clsx(styles.view, {
          view: view,
          [styles[`hidden-${hidden}`]]: hidden,
          [styles['view-hover']]: isHover,
        })}
      >
        <Box {...contentProps}>{children}</Box>
      </Box>
    </Box>
  );
}

ScrollAreaComponent.defaultProps = {
  hidden: null,
  isHover: true,
  classes: {},
  viewProps: {},
  contentProps: {},
};
ScrollAreaComponent.propTypes = {
  hidden: PropTypes.oneOf(['x', 'y', null]),
  isHover: PropTypes.bool,
  contentProps: PropTypes.object,
  viewProps: PropTypes.object,
  classes: PropTypes.object,
};

export default memo(ScrollAreaComponent);
