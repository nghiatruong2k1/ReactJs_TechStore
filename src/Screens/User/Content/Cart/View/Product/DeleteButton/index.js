import {memo,useContext} from 'react';
import clsx from 'clsx';
import {Tooltip,IconButton} from '@mui/material/';
import {} from '@mui/icons-material/';
import styles from './styles.module.css';
import {ItemContext} from "../provider";
function DeleteButton({...props}){
  const {data,index} = useContext(ItemContext);
  const {cart} = useContext(global.config.UserContext);
  return(
    <Tooltip placement="top" title="Xóa sản phẩm">
      <span>
        <IconButton disabled={!data} onClick={()=>{cart.handle.delete(index)}}>
          <span className="fas fa-trash"></span>
        </IconButton>
      </span>
    </Tooltip>
  )
}
export default memo(DeleteButton);