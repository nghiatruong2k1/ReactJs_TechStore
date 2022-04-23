

import {memo,useContext,useMemo} from 'react';
import {useCookies} from 'react-cookie'
import clsx from 'clsx';
import {Badge} from '@mui/material/';
import styles from '../styles.module.css';

import {OptionButton} from "../index";
function Order(){
  const [cookies] = useCookies();
  const {getRoute} = global.config.useRoute();
  return(
    <OptionButton
      show = {Boolean(cookies['token'])}
      title = {"Đơn hàng"}
      to = {getRoute("user","profile","orders")}
      icon = {<span className={clsx("fa fa-store",styles.icon)}/>}
    >
      
    </OptionButton>
  )
}
export default memo(Order);