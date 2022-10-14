import { memo, useEffect, useMemo } from 'react';
import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  Paper,
  Typography,
} from '@mui/material';
import styles from './DialogResult.module.css';
import { useDisclosure } from '@mantine/hooks';
import { typeToast } from '~/config/TypeToast';
import PropTypes from 'prop-types';
function DialogResultComponent({
  onSuccess,
  onCancel,
  onClose,
  title,
  message,
  type,
}) {
  const [isOpen, { close }] = useDisclosure(true);
  useEffect(() => {
    if (!isOpen) {
      const timeout = setTimeout(() => {
        onClose && onClose();
      }, 500);
      return () => {
        clearTimeout(timeout);
      };
    }
  }, [isOpen]);
  const { Title, Icon, Type } = useMemo(() => {
    return {
      Title: title || (typeToast[type] ?? typeToast['bell']).title,
      Icon: (typeToast[type] ?? typeToast['bell']).icon,
      Type: (typeToast[type] ?? typeToast['bell']).className,
    };
  }, [title, type]);
  return (
    <Dialog
      className={styles.root}
      open={isOpen}
      fullWidth={true}
      disablePortal
      scroll={'body'}
      PaperProps={{
        className: Type,
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
      <DialogActions className={styles.head}>
        {Icon}
        <DialogTitle className={styles.title} component="b">
          {Title}
        </DialogTitle>
      </DialogActions>
      <DialogContent sx={{ p: 0.2 }}>
        <Paper variant="outlined" sx={{ p: 0.5 }}>
          <Typography>{message}</Typography>
        </Paper>
      </DialogContent>
      <DialogActions className={styles.foot}>
        <Button
          onClick={() => {
            onCancel && onCancel();
            close();
          }}
          color="error"
          variant="contained"
        >
          Hủy
        </Button>
        <Button
          onClick={() => {
            onSuccess && onSuccess();
            close();
          }}
          color="success"
          variant="contained"
        >
          Đồng ý
        </Button>
      </DialogActions>
    </Dialog>
  );
}
DialogResultComponent.propTypes = {
  type: PropTypes.oneOf(Object.keys(typeToast)),
};
export default memo(DialogResultComponent);
