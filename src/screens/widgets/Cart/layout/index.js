import { memo } from 'react';
import { Drawer, Box, Stack,  Paper, Card, Badge, CardContent } from '@mui/material/';
import styles from './layout.module.css';
import { ScrollArea } from '~/components';

function CartLayout({
  toggleComponent,
  total,
  open,
  onClose,
  onOpen,
  header,
  footer,
  children,
}) {
  return (
    <>
      <Box
        component={toggleComponent ?? 'div'}
        icon={
          <Badge badgeContent={(total ?? 0) + ''} color="info" max={99}>
            <span className={'fa fa-shopping-cart'} />
          </Badge>
        }
        title={'Giỏ hàng'}
        onClick={onOpen}
      />
      <Drawer
        anchor="right"
        open={open}
        PaperProps={{
          sx: {
            p: 1,
          },
        }}
        onClose={onClose}
      >
        <Card
          className={styles.card}
          component={Stack}
          sx={{ height: '100%', width: '20em' }}
        >
          <Box
            component={header ?? 'div'}
            total={total ?? 0}
            onClose={onClose}
          />
          <CardContent sx={{ flex: 1, p: 0.5, overflow: 'hidden' }}>
            <ScrollArea component={Paper} variant='outlined'>{children}</ScrollArea>
          </CardContent>
          <Box component={footer ?? 'div'} onClose={onClose} />
        </Card>
      </Drawer>
    </>
  );
}
export default memo(CartLayout);
