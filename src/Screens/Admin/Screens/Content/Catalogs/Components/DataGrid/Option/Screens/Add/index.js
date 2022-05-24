import {memo,useContext} from 'react';
import clsx from 'clsx';
import {} from '@mui/material/';
import {AddCircleOutlineRounded} from '@mui/icons-material/';
import styles from './styles.module.css';
import OptionButton from "../../Components/Button/";

import {DataContext} from '../../../provider';
function AddButton({onClick,...props}){
  const {option} = useContext(DataContext);
  return(
    <OptionButton 
      title="Thêm mới"
      icon={<AddCircleOutlineRounded />}
      {...props}
      {...option.addProps}
    >
    </OptionButton>
  )
}
export default memo(AddButton);