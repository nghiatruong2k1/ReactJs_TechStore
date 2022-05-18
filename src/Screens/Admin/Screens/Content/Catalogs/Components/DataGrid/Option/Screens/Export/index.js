import {memo} from 'react';
import clsx from 'clsx';
import {} from '@mui/material/';
import {FileUploadRounded} from '@mui/icons-material/';
import styles from './styles.module.css';
import OptionButton from "../../Components/Button/";
function ExportButton({...props}){
  return(
    <OptionButton title="Export" icon={<FileUploadRounded />} {...props}></OptionButton>
  )
}
export default memo(ExportButton);