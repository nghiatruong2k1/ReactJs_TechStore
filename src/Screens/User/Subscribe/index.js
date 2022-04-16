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
        <Typography align="center" mb={1}>Delivering the latest product trends and industry news straight to your inbox</Typography>
        <Grid container justifyContent = 'center'>
          <Grid item xs={6}>
            <Stack direction = 'row' alignItems="center" spacing={1}>
                <TextField 
                    placeholder="Your email" 
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
            <Typography component="small" align="center">We’ll never share your email address with a third-party. </Typography>
          </Grid>
        </Grid>
      </Container>
    </Box>
  )
}
export default memo(Subscribe);