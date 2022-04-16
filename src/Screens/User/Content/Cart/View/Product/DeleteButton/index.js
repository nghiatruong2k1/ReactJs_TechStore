import {memo,useContext} from 'react';
import clsx from 'clsx';
import {Tooltip,IconButton} from '@mui/material/';
import {} from '@mui/icons-material/';
import styles from './styles.module.css';
import {ItemContext} from "../provider";
function DeleteButton({...props}){
  const {index} = useContext(ItemContext);
  const {cart} = useContext(global.config.UserContext);
  return(
    <Tooltip placement="top" title="Xóa sản phẩm">
            <IconButton onClick={()=>{cart.handle.delete(index)}}>
              <span className="fas fa-trash"></span>
            </IconButton>
          </Tooltip>
  )
}
export default memo(DeleteButton);