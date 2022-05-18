import {memo,useContext} from 'react';
import clsx from 'clsx';
import {Edit} from '@mui/icons-material/';
import styles from './styles.module.css';

import {DataContext} from "../../../../provider";

import OptionButton from "../../../../Option/Components/Button/"
import { getRoute } from "../../../../../../../../../../../Config/Route/";
function EditButton({data,loading,...props}){
  const {dataset} = useContext(DataContext);
  return(
    <OptionButton 
      title="Cập nhật"
      loading={loading}
      icon = {<Edit />}
      buttonProps={dataset.updateProps && dataset.updateProps(data)}
    />
  )
}
export default memo(EditButton);