import { memo } from 'react';
import {
  Box,
  Paper,
  Container,
  Grid,
  Stack,
  Typography,
  Button,
  TextField,
  Icon,
} from '@mui/material/';
import styles from './Subscribe.module.css';

function SubscribeCompoent({ ...props }) {
  return (
    <Box
      component={Paper}
      py={2}
      className={styles.section}
    >
      <Stack align="center" className={styles.container} sx={{ py: 2 }}>
        <Typography align="center" mb={1}>
          Cung cấp các tin tức sản phẩm mới nhất và tin tức ngành trực tiếp đến
          hộp thư của bạn.
        </Typography>
        <Grid container justifyContent="center">
          <Grid item xs={12} sm={10} md={8} lg={6}>
            <Stack direction="row" alignItems="center" spacing={1}>
              <TextField
                placeholder="Email của bạn:"
                type="email"
                sx={{ flex: 1 }}
                InputProps={{
                  className: styles.feild,
                  color: 'info',
                }}
                inputProps={{
                  sx: { p: 1 },
                }}
                autoComplete="off"
                variant="outlined"
              />
              <Button
                className={styles.submit}
                type="submit"
                variant="contained"
                color="info"
                disabled
                sx={{ py: 1, px: { xs: 1, sm: 1.2, md: 1.6, lg: 2 } }}
              >
                <Icon className="fa fa-envelope" />
                <Typography
                  align="center"
                  sx={{ display: { xs: 'none', md: 'block' }, px: 1 }}
                >
                  Đăng ký
                </Typography>
              </Button>
            </Stack>
          </Grid>
        </Grid>
        <Typography variant="caption" align="center">
          Chúng tôi sẽ không bao giờ chia sẻ địa chỉ email của bạn với bên thứ
          ba.
        </Typography>
      </Stack>
    </Box>
  );
}
export default memo(SubscribeCompoent);
