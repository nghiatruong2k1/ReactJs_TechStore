import {memo} from 'react';
import {
  Box,
  Paper,
  Container,
  Grid,
  Stack,
  Typography,
  Button,
  TextField,
  Icon
} from '@mui/material/';

import { makeStyles } from '@mui/styles';
const useStyles = makeStyles((theme)=>{
  return {
    section:{
      background:`${theme.palette.background.default} !important`
    },container:{
      color:"#000 !important",
      backgroundColor:"var(--infoBg) !important"
    },feild:{
      color:`${theme.palette.text.paper} important`,
      backgroundColor:`${theme.palette.background.paper} important`
    }
  }}
);

function Subscribe({...props}){
  const styles = useStyles();
  return(
    <Box component="section" py={2} className={styles.section} >
      <Container maxWidth="xxl" component={Paper} align="center" className={styles.container} sx={{py:2}}>
        <Typography align="center" mb={1}>
          Cung cấp các tin tức sản phẩm mới nhất và tin tức ngành trực tiếp đến hộp thư của bạn.
        </Typography>
        <Grid container justifyContent = 'center'>
          <Grid item xs={12} sm={10} md={8} lg={6}>
            <Stack direction = 'row' alignItems="center" spacing={1}>
              <TextField 
                  placeholder="Email của bạn:" 
                  type="email" 
                  sx={{flex:1}}
                  InputProps={{
                    className:styles.feild
                  }} 
                  inputProps={{
                    sx:{p:1}
                  }} 
                  value=""
                  variant="outlined" 
              />
              <Button 
                className={styles.submit} 
                type="submit"
                variant="contained" 
                sx={{py:1,px:{xs:1,sm:1.2,md:1.6,lg:2}}}
              >
                <Icon className="fa fa-envelope" />
                <Typography align="center" sx={{display:{xs:"none",md:"block"},px:1}}>
                  Đăng ký
                </Typography>
              </Button>
            </Stack>
          </Grid>
        </Grid>
        <Typography variant="caption" align="center">
          Chúng tôi sẽ không bao giờ chia sẻ địa chỉ email của bạn với bên thứ ba.
        </Typography>
      </Container>
    </Box>
  )
}
export default memo(Subscribe);