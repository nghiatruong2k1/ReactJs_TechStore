import { memo } from 'react';
import { Box, Card, CardContent } from '@mui/material/';
import styles from './Sidebar.module.css';
import { ScrollArea } from '~/components';
import clsx from 'clsx';

function SidebarComponent({
  toggleComponent,
  open,
  onOpen,
  onClose,
  header,
  footer,
  children,
  className,
  isScroll,
  ...props
}) {
  return (
    <Box className={clsx(styles.root, { [className]: className })} {...props}>
      <Card sx={{ height: Boolean(isScroll) ? '100%' : 'auto' }}>
        <CardContent sx={{ p: 1 }}>{header}</CardContent>
        <CardContent sx={{ flex: 1, p: 1, overflow: 'hidden' }}>
          <Box component={Boolean(isScroll) ? ScrollArea : 'div'}>{children}</Box>
        </CardContent>
        <CardContent sx={{ p: 1 }}>{footer}</CardContent>
        <div></div>
      </Card>
    </Box>
  );
}
export default memo(SidebarComponent);
