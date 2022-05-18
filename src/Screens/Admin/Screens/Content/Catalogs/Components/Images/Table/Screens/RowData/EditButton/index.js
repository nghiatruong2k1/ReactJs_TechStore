import {memo,useContext} from 'react';
import clsx from 'clsx';
import {Tooltip,IconButton} from '@mui/material/';
import {Edit} from '@mui/icons-material/';
import styles from './styles.module.css';

import {DataContext} from "../../../../provider";
import {NavLink} from "react-router-dom";
import { getRoute } from "../../../../../../../../../../../Config/Route/";
function EditButton({data,loading,...props}){
  const {controller} = useContext(DataContext);
  return(
    <Tooltip 
      title="Cập nhật" 
      placement="top"
      arrow
    >
      <span>
        <IconButton 
          disabled={loading}
          component={NavLink} to={getRoute("admin",controller,"update",{id:data && data.Id})}
          variant="outlined"
        >
            <Edit />
        </IconButton>
      </span>
    </Tooltip>
  )
}
export default memo(EditButton);