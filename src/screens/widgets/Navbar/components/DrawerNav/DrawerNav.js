import { memo } from 'react';
import { useDisclosure } from '@mantine/hooks';
import {
  Box,
  Card,
  CardContent,
  CardHeader,
  Drawer,
  Paper,
  Tooltip,
  IconButton,
} from '@mui/material';
import styles from './DrawerNav.module.css';
import { ScrollArea } from '~/components';
function DwawerNavComponent({ children, toggleComponent }) {
  const [isOpen, { close, open }] = useDisclosure(false);
  return (
    <>
      <Box
        component={toggleComponent ?? 'div'}
        icon={<span className={'fas fa-bars'} />}
        onClick={open}
      />
      <Drawer
        anchor="right"
        open={isOpen}
        onClose={close}
        classes={{
          paper: styles.paper,
        }}
        PaperProps={{
          sx: { p: 0.5 },
        }}
      >
        <Card
          sx={{ overflowX: 'hidden', width: '15rem', height: '100%', p: 0.5 }}
        >
          <CardHeader
            sx={{ px: 1, py: 0.5 }}
            avatar={<span className="fas fa-bars" />}
            titleTypographyProps={{
              component: 'h6',
            }}
            title={'Menu'}
            action={
              <Tooltip placement="top" title="Đóng">
                <IconButton color="error" onClick={close}>
                  <span className="fas fa-times" />
                </IconButton>
              </Tooltip>
            }
          />
          <CardContent sx={{ flex: 1, p: 0, overflow: 'hidden' }}>
            <ScrollArea component={Paper} variant="outlined">
              {children}
            </ScrollArea>
          </CardContent>
        </Card>
      </Drawer>
    </>
  );
}
export default memo(DwawerNavComponent);
