import {memo} from 'react';
import {
  Box,
  Container,
  Grid,
  Stack,
  Typography,
  Button,
  TextField
} from '@mui/material/';
import styles from './styles.module.css';
function Subscribe({...props}){
  return(
    <Box component="section" mt={3} className={styles.section}>
      <Container maxWidth="xxl" >
        <Typography align="center" mb={1}>
          Cung cấp các tin tức sản phẩm mới nhất và tin tức ngành trực tiếp đến hộp thư của bạn.
        </Typography>
        <Grid container justifyContent = 'center'>
          <Grid item xs={6}>
            <Stack direction = 'row' alignItems="center" spacing={1}>
                <TextField 
                    placeholder="Email của bạn:" 
                    type="email" 
                    className={styles.feild}
                    InputProps={{
                      className:styles.display
                    }} 
                    inputProps={{
                      className:styles.input
                    }} 
                    value=""
                    variant="outlined" 
                />
                <Button className={styles.submit} variant="contained" startIcon={<i className="fa fa-envelope"></i>}>Subscribe</Button>
            </Stack>
          </Grid>
        </Grid>
        <Typography align="center">
          Chúng tôi sẽ không bao giờ chia sẻ địa chỉ email của bạn với bên thứ ba.
        </Typography>
      </Container>
    </Box>
  )
}
export default memo(Subscribe);