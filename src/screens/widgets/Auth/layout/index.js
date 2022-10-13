import { memo, Fragment, useEffect } from 'react';
import {
  Box,
  Dialog,
  DialogContent,
  DialogTitle,
  Divider,
  IconButton,
  Paper,
  Stack,
  Tooltip,
  Typography,
} from '@mui/material';
import styles from './layout.module.css';
import { HighlightOff } from '@mui/icons-material';

import { useGetAuth } from '~/hooks/Auth';
import { useGetTitle } from '~/hooks/Title';
function AuthLayoutComponent({ toggleComponent, children, title }) {
  const { state, dispath, initCase } = useGetAuth();
  const handleTitle = useGetTitle();
  useEffect(() => {
    if (state.isOpen) {
      return handleTitle(title);
    }
  }, [title, state.isOpen]);
  return (
    <Fragment>
      <Box
        component={toggleComponent ?? 'div'}
        icon={<span className={'fas fa-sign-in-alt'} />}
        title={'Đăng nhập'}
        onClick={() => dispath([initCase.TOGGLE_OPEN, true])}
      />
      <Dialog
        open={state.isOpen}
        onClose={() => dispath([initCase.TOGGLE_OPEN, false])}
        fullWidth={true}
        disablePortal
        scroll={'body'}
        PaperProps={{
          sx: {
            m: {
              xs: 0.5,
              sm: 1,
              md: 1.5,
              lg: 2,
            },
            p: 1,
          },
        }}
      >
        <DialogTitle sx={{ py: 0.1 }}>
          <Stack direction="row" alignItems="center">
            <Typography
              flex="1"
              variant="h4"
              textAlign={'center'}
              sx={{ py: 0, px: 1 }}
            >
              {title}
            </Typography>
            <Tooltip title="Đóng" placement="top" arrow>
              <IconButton
                onClick={() => dispath([initCase.TOGGLE_OPEN, false])}
                color="error"
              >
                <HighlightOff className={styles.close} />
              </IconButton>
            </Tooltip>
          </Stack>
        </DialogTitle>
        <DialogContent sx={{ p: 0.2 }} disabled={state.isLoading}>
          <Paper variant="outlined" sx={{ p: 0.2 }}>
            {children}
          </Paper>
        </DialogContent>
      </Dialog>
    </Fragment>
  );
}
export default memo(AuthLayoutComponent);
