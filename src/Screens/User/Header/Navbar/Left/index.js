import {memo} from 'react';
import {Stack,Box,Button} from '@mui/material/';
import {NavLink} from "react-router-dom"
import styles from './styles.module.css';

function LeftNav({...props}){
  const route = global.config.useRoute();
  return(
  <Stack component="ul" 
    direction="row" 
    flex="1"
    className={styles.nav}
  >
      <Box component="li">
        <Button component={NavLink} to="/">Trang chủ</Button>
      </Box>
      <Box component="li">
        <Button component={NavLink} to={route.user.category.index}>Danh mục</Button>
      </Box>
      <Box component="li">
        <Button component={NavLink} to={route.user.brand.index}>Thương hiệu</Button>
      </Box>
      <Box component="li">
        <Button component={NavLink} to="service">Dịch vụ</Button>
      </Box>
      <Box component="li">
        <Button component={NavLink} to="sell">Tin tức</Button>
      </Box>
  </Stack>
  )
}
export default memo(LeftNav);