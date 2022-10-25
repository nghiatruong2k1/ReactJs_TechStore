import { memo} from 'react';
import {
  Tooltip,
  IconButton,
  Typography,
  Stack,
  DialogTitle,
} from '@mui/material/';
import { AddPhotoAlternate, HighlightOff } from '@mui/icons-material/';
import { useGetContentListContext } from '../provider';
function Head() {
  const {onClose,dispath}  = useGetContentListContext();
  return (
    <DialogTitle sx={{ py: 0.5, px: 1 }}>
      <Stack direction="row" spacing={1} alignItems="center">
        <Typography flex="1" variant="h4">
          Chọn hình ảnh
        </Typography>
        <Tooltip title="Thêm hình ảnh" placement="top" arrow>
          <IconButton color='info'>
            <AddPhotoAlternate />
          </IconButton>
        </Tooltip>
        <Tooltip title="Đóng" placement="top">
          <IconButton onClick={onClose} color='error'>
            <HighlightOff />
          </IconButton>
        </Tooltip>
      </Stack>
    </DialogTitle>
  );
}
export default memo(Head);
