import { memo, Fragment, forwardRef } from 'react';
import clsx from 'clsx';
import { Box, Button, Grid, Tooltip, Typography } from '@mui/material';
import styles from './HeaderOption.module.css';
import { NavLink } from 'react-router-dom';
const HeaderOptionComponent = forwardRef(
  ({ icon, title, className, ...props }, ref) => {
    return (
      <Grid ref={ref} className={clsx(styles.root)} item xs={3} sm={1}>
        <Tooltip
          PopperProps={{
            sx: { display: { xs: (title && 'block') || 'none', lg: 'none' } },
          }}
          placement="top"
          title={title || ''}
          arrow
        >
          <div>
            <Button
              {...props}
              component={(props.to && NavLink) || 'button'}
              className={styles.button}
              color="primary"
            >
              <Box className={styles.icon}>{icon}</Box>
              <Typography
                sx={{ display: { xs: 'none', lg: 'block' } }}
                className={styles.text}
              >
                {title}
              </Typography>
            </Button>
          </div>
        </Tooltip>
      </Grid>
    );
  },
);
HeaderOptionComponent.displayName = 'HeaderOptionComponent';
HeaderOptionComponent.defaultProps = {};
export default memo(HeaderOptionComponent);
