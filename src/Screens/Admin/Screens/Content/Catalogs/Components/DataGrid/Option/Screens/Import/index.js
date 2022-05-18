import {memo} from 'react';
import clsx from 'clsx';
import {} from '@mui/material/';
import {FileDownloadRounded} from '@mui/icons-material/';
import styles from './styles.module.css';
import OptionButton from "../../Components/Button/";
function ImportButton({...props}){
  return(
    <OptionButton title="Import" icon={<FileDownloadRounded />} {...props}></OptionButton>
  )
}
export default memo(ImportButton);