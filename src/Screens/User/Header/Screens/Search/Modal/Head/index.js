import {memo} from 'react';
import {
  Tooltip,
  IconButton,
  Typography,
  Stack,
  DialogTitle
} from '@mui/material/';
import {HighlightOff} from '@mui/icons-material/';
function Head({onClose,...props}){
  return(
    <DialogTitle sx={{p:0.5}}>
        <Stack direction="row" alignItems="center">
        <Typography flex="1" variant="h4" sx={{py:0,px:1}}>
            Tìm kiếm
        </Typography>
        <Tooltip title="Đóng" placement="top" arrow>
            <IconButton onClick={onClose} color="error">
                <HighlightOff />
            </IconButton>
        </Tooltip>
        </Stack>
    </DialogTitle>
  )
}
export default memo(Head);