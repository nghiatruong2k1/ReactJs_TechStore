import { memo, Fragment, forwardRef } from 'react';
import clsx from 'clsx';
import {
  Box,
  Button,
  Card,
  CardHeader,
} from '@mui/material';
import styles from './Auth.module.css';
import { NavLink } from 'react-router-dom';
function AuthProfileComponent({ icon, title, to, className, ...props }, ref) {
  return (
    <Box className={clsx(styles.root)} ref={ref}>
      <Card>
        <CardHeader
          component={Button}
          classes={{
            root:styles.button,
            avatar:styles.avatar,
            title:styles.title
          }}
          avatar={icon}
          title={title}
      
          {...props}
        />
      </Card>
    </Box>
  );
}
export default memo(forwardRef(AuthProfileComponent));
