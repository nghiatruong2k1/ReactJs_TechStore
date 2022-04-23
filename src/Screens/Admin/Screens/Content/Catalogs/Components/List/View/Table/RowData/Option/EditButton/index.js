import {memo,useContext} from 'react';
import clsx from 'clsx';
import {Tooltip,IconButton} from '@mui/material/';
import {Edit} from '@mui/icons-material/';
import styles from './styles.module.css';

import {ListContext} from "../../../../../provider";

import {RowDataContext} from '../../provider';
import {NavLink} from "react-router-dom"
function EditButton({...props}){
  const {controller} = useContext(ListContext);
  const {data,loading} = useContext(RowDataContext);
  const {getRoute} = global.config.useRoute();
  return(
    <Tooltip 
      title="Cập nhật" 
      placement="top"
    >
      <span>
        <IconButton 
          disabled={loading}
          component={NavLink} to={getRoute("admin",controller,"update")+"/"+data.Id}
          variant="outlined"
        >
            <Edit />
        </IconButton>
      </span>
    </Tooltip>
  )
}
export default memo(EditButton);