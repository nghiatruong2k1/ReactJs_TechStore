import {memo,useContext} from 'react';
import clsx from 'clsx';
import {IconButton,Tooltip} from '@mui/material/';
import {DeleteForever} from '@mui/icons-material/';
import styles from './styles.module.css';
import {ItemContext} from "../provider";
function DeleteButton({...props}){
  const {index} = useContext(ItemContext);
  const {cart} = useContext(global.config.UserContext);
  return(
    <Tooltip placement="top" title="Xóa khỏi giỏ hàng">
      <IconButton sx={{fontSize:"1.4em !important"}} onClick={()=>{cart.handle.delete(index)}}>
        <DeleteForever />
      </IconButton>
    </Tooltip>
  )
}
export default memo(DeleteButton);