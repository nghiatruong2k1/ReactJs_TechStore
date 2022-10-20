import { memo } from 'react';
import { Grid, Stack } from '@mui/material/';
import styles from './Default.module.css';
import { ScrollArea, Sidebar } from '~/components';
import { LogoWidget } from '~/screens/widgets';

import Header from '~/area/Admin/screens/Header';
import { AdminNavbarWidget,AdminAuthWidget } from '~/area/Admin/screens/widget';
function AdminDefaultLayout({children}) {
  return (
    <div className={styles.root}>
      <Header />
      <Grid container className={styles.body}>
        <Grid item xs={2.5} component="aside">
          <Sidebar
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
        </Grid>
        <Grid item xs={9.5} component="main">
          <ScrollArea
            contentProps={{ component: Stack, spacing: 2 }}
          >
            {children}
          </ScrollArea>
        </Grid>
      </Grid>
    </div>
  );
}
export default memo(AdminDefaultLayout);
