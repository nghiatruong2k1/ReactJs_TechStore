import { memo, useMemo, Fragment } from 'react';
import { Box, Card, CardContent, IconButton, Drawer } from '@mui/material/';
import styles from './Sidebar.module.css';
import { ScrollArea } from '~/components';
import clsx from 'clsx';
import { useDisclosure } from '@mantine/hooks';
const Drawbar = memo(({ children }) => {
  const [isOpen, { close, open }] = useDisclosure(false);
  return (
    <>
      <IconButton onClick={open} className={clsx(styles.toggle,"-containedPrimary")}>
        <span className="fas fa-chevron-right" />
      </IconButton>
      <Drawer
        anchor="left"
        open={isOpen}
        disablePortal
        PaperProps={{
          sx: {
            p: 1,
            width:'16em'
          },
        }}
        onClose={close}
      >
        {children}
      </Drawer>
    </>
  );
});
function SidebarComponent({
  header,
  footer,
  children,
  className,
  isScroll,
  fixed,
  ...props
}) {
  const Wrapper = useMemo(() => {
    if (fixed) {
      return Drawbar;
    } else {
      return Fragment;
    }
  }, [fixed]);
  return (
    <Box className={clsx(styles.root, { [className]: className })} {...props}>
      <Wrapper>
        <>
          <Card sx={{ height: Boolean(fixed || isScroll) ? '100%' : 'auto' }}>
            <CardContent sx={{ p: 1 }}>{header}</CardContent>
            <CardContent sx={{ flex: 1, p: 1, overflow: 'hidden' }}>
              <Box component={Boolean(fixed || isScroll) ? ScrollArea : 'div'}>
                {children}
              </Box>
            </CardContent>
            <CardContent sx={{ p: 1 }}>{footer}</CardContent>
            <div></div>
          </Card>
        </>
      </Wrapper>
    </Box>
  );
}
export default memo(SidebarComponent);
