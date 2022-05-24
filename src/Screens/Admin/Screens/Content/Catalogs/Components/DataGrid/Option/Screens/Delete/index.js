import {memo,useContext} from 'react';
import clsx from 'clsx';
import {} from '@mui/material/';
import {DeleteForeverRounded} from '@mui/icons-material/';
import styles from './styles.module.css';
import OptionButton from "../../Components/Button/";
import {DataContext} from '../../../provider';
function TrashButton({...props}){
  const {state,handle,option} = useContext(DataContext);
  if(state.inTrash){
    return(
      <OptionButton 
        title={"Xóa (đã chọn)"} 
        icon={<DeleteForeverRounded />}
        {...props}
        {...option.deleteProps}
      />
    )
  }else{
    return <></>
  }
}
export default memo(TrashButton);