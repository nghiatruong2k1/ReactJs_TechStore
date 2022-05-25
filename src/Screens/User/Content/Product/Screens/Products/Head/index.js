import {memo,useContext} from 'react';
import clsx from 'clsx';
import {Stack,Typography} from '@mui/material/';
import {} from '@mui/icons-material/';
import styles from './styles.module.css';
import HeadSelect from "./Select/";
import HeadButtons from "./Buttons/";
import {ProductsContext} from "../provider";
function Head({...props}){
  const {state} = useContext(ProductsContext)
  return(
    <Stack direction="row" spacing={1}>
      <Typography component="h6" flex="1">Danh sách sản phẩm ({state.total}):</Typography>
      <HeadSelect />
      <HeadButtons />
    </Stack>
  )
}
export default memo(Head);