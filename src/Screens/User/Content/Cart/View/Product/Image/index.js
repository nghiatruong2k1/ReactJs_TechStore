import {memo,useContext} from 'react';
import clsx from 'clsx';
import {} from '@mui/material/';
import {} from '@mui/icons-material/';
import styles from './styles.module.css';
import {Frame,Image} from "../../../../../../../Components/"
import {ItemContext} from "../provider";
function ItemImage({...props}){
  const {state} = useContext(ItemContext);
  return(
    <Frame square>
      <Image contain src={!state.isLoading && state.data.ImageUrl}/>
    </Frame>
  )
}
export default memo(ItemImage);