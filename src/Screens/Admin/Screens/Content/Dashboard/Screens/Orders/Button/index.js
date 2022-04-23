import {memo,useContext} from 'react';
import clsx from 'clsx';
import {Tooltip,Button} from '@mui/material/';
import {} from '@mui/icons-material/';
import styles from './styles.module.css';
import {OrdersContext} from "../provider";
function OrdersButton({tooltip,type,children,...props}){
  const {chart} = useContext(OrdersContext);
  function handleClick(){
    chart.set(type)
  }
  return(
    <Tooltip title={tooltip} placement="top">
      <Button size="small" onClick={handleClick} className={clsx(styles.button,{
        [styles.active]:type==chart.get
      })} variant="contained">
        {children}
      </Button>
    </Tooltip>
  )
}
export default memo(OrdersButton);