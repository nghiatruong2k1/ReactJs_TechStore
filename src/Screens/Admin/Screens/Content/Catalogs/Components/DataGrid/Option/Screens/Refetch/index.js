import {memo,useContext} from 'react';
import clsx from 'clsx';
import {} from '@mui/material/';
import {Autorenew} from '@mui/icons-material/';
import styles from './styles.module.css';
import OptionButton from "../../Components/Button/";
import {DataContext} from '../../../provider';
function RefetchButton({...props}){
  const {handle,option} = useContext(DataContext);
  return(
    <OptionButton 
      title="Tải lại" 
      icon={<Autorenew />} 
      onClick={()=>(handle.refetch && handle.refetch())}
      {...props}
      {...option.refetchProps}
    />
  )
}
export default memo(RefetchButton);