import { memo } from 'react';
import {
  Paper,
  Stack,
  Typography,
  Button,
  TextField,
  Icon,
  InputAdornment,
  Container,
} from '@mui/material/';
import styles from './Subscribe.module.css';

function SubscribeCompoent({ ...props }) {
  return (
    <Container maxWidth='100%' component={Paper} sx={{ py: 2 ,my:2 }} className={styles.section}>
      <Stack align="center" className={styles.container} sx={{ py: 2, px: 2 }}>
        <Typography align="center" mb={1}>
          Cung cấp các tin tức sản phẩm mới nhất và tin tức ngành trực tiếp đến
          hộp thư của bạn.
        </Typography>
        <TextField
          placeholder="Email của bạn:"
          type="email"
          sx={{ flex: 1 }}
          inputProps={{
            sx: { p: 1 },
          }}
          autoComplete="off"
          variant="outlined"
          InputProps={{
            className: styles.feild,
            color: 'info',
            endAdornment: (
              <InputAdornment position="end">
                <Button
                  className={styles.submit}
                  type="submit"
                  variant="contained"
                  color="info"
                  sx={{ py: 0.6, px: 1 }}
                >
                  <Icon className="fa fa-envelope" />
                  <Typography
                    align="center"
                    sx={{ display: { xs: 'none', md: 'block' }, px: 1 }}
                  >
                    Đăng ký
                  </Typography>
                </Button>
              </InputAdornment>
            ),
          }}
        />
        <Typography variant="caption" align="center">
          Chúng tôi sẽ không bao giờ chia sẻ địa chỉ email của bạn với bên thứ
          ba.
        </Typography>
      </Stack>
    </Container>
  );
}
export default memo(SubscribeCompoent);
