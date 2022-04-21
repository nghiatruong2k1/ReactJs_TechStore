import {memo,useContext} from 'react';
import clsx from 'clsx';
import {} from '@mui/material/';
import {} from '@mui/icons-material/';
import styles from './styles.module.css';
import {Frame,Image} from "../../../../../../../../../../Components/"
import {ItemContext} from "../provider";
function ItemImage({...props}){
  const {data,loading} = useContext(ItemContext);
  return(
    <Frame square loading={loading}>
      <Image contain src={data && data.ImageUrl}/>
    </Frame>
  )
}
export default memo(ItemImage);