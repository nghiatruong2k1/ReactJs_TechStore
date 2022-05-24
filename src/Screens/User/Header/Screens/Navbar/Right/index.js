import {memo} from 'react';
import {Stack,Button,Box} from '@mui/material/';
import {NavLink} from "react-router-dom"
import styles from './styles.module.css';

import LanguageButton from "./Language/"
function RightNav({...props}){
  return(
  <Stack component="ul" 
    direction="row" 
    flex="1" 
    justifyContent = 'flex-end'
    className={styles.nav}
  >
      <Box component="li">
        <Button component={NavLink} to="#">Tải ứng dụng</Button>
      </Box>
      <LanguageButton />
  </Stack>
  )
}
export default memo(RightNav);