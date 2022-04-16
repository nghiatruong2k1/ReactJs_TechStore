import {memo} from 'react';
import clsx from 'clsx';
import {Tooltip,IconButton} from '@mui/material/';
import {Save} from '@mui/icons-material/';
import styles from './styles.module.css';
function Option({...props}){
  return(
    <>
      <Tooltip title="Save to database" placement="top">
        <IconButton color="info">
          <Save />
        </IconButton>
      </Tooltip>
    </>
  )
}
export default memo(Option);