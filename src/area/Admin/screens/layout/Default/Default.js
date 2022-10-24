import { memo } from 'react';
import { Grid, Stack } from '@mui/material/';
import styles from './Default.module.css';
import { ScrollArea, Sidebar } from '~/components';
import { LogoWidget } from '~/screens/widgets';

import Header from '~/area/Admin/screens/Header';
import {
  AdminNavbarWidget,
  AdminAuthWidget,
} from '~/area/Admin/screens/widget';
import { useMediaQuery } from '@mantine/hooks';
function AdminDefaultLayout({ children }) {
  const isSmallSize = useMediaQuery('(max-width: 650px)');
  return (
    <div className={styles.root}>
      <Header />
      <Grid container className={styles.body}>
        <Sidebar
          item
          xs={isSmallSize ? 1 : 2.5}
          component={Grid}
          fixed={isSmallSize}
          header={
            <>
              <LogoWidget height={'3em'} />
            </>
          }
          className={'fullview'}
          isScroll
        >
          <AdminAuthWidget />
          <AdminNavbarWidget />
        </Sidebar>
        <Grid item xs={isSmallSize ? 11 : 9.5} component="main">
          <ScrollArea contentProps={{ component: Stack, spacing: 2 }}>
            {children}
          </ScrollArea>
        </Grid>
      </Grid>
    </div>
  );
}
export default memo(AdminDefaultLayout);
