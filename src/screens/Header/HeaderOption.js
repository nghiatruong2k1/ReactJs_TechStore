import { memo, Fragment, forwardRef } from 'react';
import clsx from 'clsx';
import { Box, Button, Tooltip, Typography } from '@mui/material';
import styles from './HeaderOption.module.css';
import { NavLink } from 'react-router-dom';
function HeaderOptionComponent({ icon,title,to,className, ...props },ref) {
  return (
    <Box
      className={clsx(styles.root)}
      ref={ref}
    >
      <Tooltip
        PopperProps={{ sx: { display: { xs: title && 'block' || 'none', lg: 'none' } } }}
        placement="top"
        title={title || ''}
        arrow
      >
        <Box>
          <Button
            component={(to && NavLink) || 'button'}
            to={to || "#"}
            className={styles.button}
            color='primary'
            {...props}
          >
            <Box className={styles.icon}>
              {icon}
            </Box>
            <Typography className={styles.text}>{title}</Typography>
          </Button>
        </Box>
      </Tooltip>
    </Box>
  );
}
export default memo(forwardRef(HeaderOptionComponent));
