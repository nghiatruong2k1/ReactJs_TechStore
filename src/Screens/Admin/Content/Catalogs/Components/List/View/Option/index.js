import {memo,useContext} from 'react';
import clsx from 'clsx';
import {
  Tooltip,
  IconButton
} from '@mui/material/';
import {
  Autorenew,
  DeleteSweep,
  RestoreFromTrash,
  DeleteForeverRounded
} from '@mui/icons-material/';
import styles from './styles.module.css';

import {ViewContext} from '../provider';
function Option({...props}){
  const {state,handle} = useContext(ViewContext);
  return(
    <>
      <Tooltip 
        title={state.inTrash && "Danh sách" || "Thùng rác"} 
        placement="top"
      >
        <IconButton onClick={()=>(handle.set("inTrash",!state.inTrash))}>
          <DeleteSweep />
        </IconButton>
      </Tooltip>
      <Tooltip 
        title={"Làm mới"} 
        placement="top"
      >
        <IconButton  
          onClick={()=>(handle.refetch())}>
          <Autorenew />
        </IconButton>
      </Tooltip>
      <Tooltip 
        title={`${state.inTrash && "Khôi phục" || "Thêm vào thùng rác"} (đã chọn)`} 
        placement="top"
      >
          <IconButton>
            {state.inTrash && <RestoreFromTrash /> || <DeleteForeverRounded />}
          </IconButton>
      </Tooltip>
    </>
  )
}
export default memo(Option);