import {memo,useContext} from 'react';
import clsx from 'clsx';
import {} from '@mui/material/';
import {DeleteSweep} from '@mui/icons-material/';
import styles from './styles.module.css';
import OptionButton from "../../Components/Button/";
import {DataContext} from '../../../provider';
function TrashButton({onClick,...props}){
  const {state,handle,option} = useContext(DataContext)
  return(
    <OptionButton 
      onClick={()=>(handle.setTrash && handle.setTrash(!state.inTrash))}
      title={state.inTrash && "Danh sách" || "Thùng rác"} 
      icon={<DeleteSweep />}
      {...props}
      {...option.trashProps}
    ></OptionButton>
  )
}
export default memo(TrashButton);