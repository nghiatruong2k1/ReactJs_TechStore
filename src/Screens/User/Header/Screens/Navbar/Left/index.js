import {memo} from 'react';
import {Stack,Box,Button} from '@mui/material/';
import {NavLink} from "react-router-dom"
import styles from './styles.module.css';

import {getRoute} from "../../../../../../Config/Route/";

function LeftNav({...props}){
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
        <Button component={NavLink} to={getRoute("user","category")}>Danh mục</Button>
      </Box>
      <Box component="li">
        <Button component={NavLink} to={getRoute("user","brand")}>Thương hiệu</Button>
      </Box>
      <Box component="li">
        <Button component={NavLink} to={getRoute("user","service")}>Dịch vụ</Button>
      </Box>
      <Box component="li">
        <Button component={NavLink} to={getRoute("user","post")}>Tin tức</Button>
      </Box>
  </Stack>
  )
}
export default memo(LeftNav);