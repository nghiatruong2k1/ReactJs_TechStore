import {memo,useContext} from 'react';
import clsx from 'clsx';
import {ButtonGroup,Button} from '@mui/material/';
import {} from '@mui/icons-material/';
import styles from './styles.module.css';
import {ProductsContext} from "../../../init";
function Buttons({...props}){
  const {state,dispath} = useContext(ProductsContext)
  function handleClick(view){
    dispath(["set_view",view]);
  }
  return(
  <ButtonGroup size="small" className={styles.group}>
    <Button className={clsx(styles.button,{
          [styles.active]:(state.view == 0)})
      }
      onClick={()=>(handleClick(0))}
    >
      <span className="fa fa-bars"></span>
    </Button>
    <Button className={clsx(styles.button,{
          [styles.active]:(state.view == 1)})
      }
      onClick={()=>(handleClick(1))}
    >
      <span className="fa fa-th"></span>
    </Button>
  </ButtonGroup>
  )
}
export default memo(Buttons);