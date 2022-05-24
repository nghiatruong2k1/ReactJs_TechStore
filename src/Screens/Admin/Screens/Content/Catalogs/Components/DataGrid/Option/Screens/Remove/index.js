import {memo,useContext} from 'react';
import clsx from 'clsx';
import {} from '@mui/material/';
import {RestoreFromTrash,DeleteForeverRounded} from '@mui/icons-material/';
import styles from './styles.module.css';
import OptionButton from "../../Components/Button/";
import {DataContext} from '../../../provider';
import {handleAllClick} from "../../index";
function RemoveButton({...props}){
  const {state,handle,option} = useContext(DataContext)
  return(
    <OptionButton 
      title={`${state.inTrash && "Khôi phục" || "Xóa tạm"} (đã chọn)`} 
      icon={state.inTrash && <RestoreFromTrash /> || <DeleteForeverRounded />}
      onClick={(e)=>{
        handleAllClick(e,".trash-btn");
        option.deleteProps 
        && option.deleteProps.onClick
        && option.deleteProps.onClick(e)
      }}
      {...props}
      {...option.deleteProps}
    ></OptionButton>
  )
}
export default memo(RemoveButton);