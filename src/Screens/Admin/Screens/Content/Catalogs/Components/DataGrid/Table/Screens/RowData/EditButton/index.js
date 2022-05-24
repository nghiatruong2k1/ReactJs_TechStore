import {memo,useContext,useState,useMemo} from 'react';
import clsx from 'clsx';
import {Edit} from '@mui/icons-material/';
import styles from './styles.module.css';

import {DataContext} from "../../../../provider";

import OptionButton from "../../../../Option/Components/Button/"
import { getRoute } from "../../../../../../../../../../../Config/Route/";
function EditButton({data,loading,...props}){
  const [isLoading,setLoading] = useState(false);
  const {dataset} = useContext(DataContext);
  const attr = useMemo(function(){
    return dataset.updateProps && dataset.updateProps(data,setLoading) || {}
  },[data]);
  return(
    <OptionButton 
      title="Cập nhật"
      loading={loading}
      icon = {<Edit />}
      {...attr}
    />
  )
}
export default memo(EditButton);