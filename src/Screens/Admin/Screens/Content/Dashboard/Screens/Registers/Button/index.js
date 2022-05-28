import {memo,useContext} from 'react';
import clsx from 'clsx';
import {Button} from '@mui/material/';
import styles from './styles.module.css';
import {OrdersContext} from "../provider";
function OrdersButton({index,active,children,...props}){
  const {dispath} = useContext(OrdersContext);
  function handleClick(){
    dispath(['set_type',index])
  }
  return(
    <Button size="small" onClick={handleClick} className={clsx(styles.button,{
        [styles.active]:active
      })} variant="contained">
        {children}
    </Button>
  )
}
export default memo(OrdersButton);