

import {memo} from 'react';
import {useCookies} from 'react-cookie'
import clsx from 'clsx';
import styles from '../styles.module.css';
import {OptionButton} from "../index";

import {getRoute} from "../../../../../Config/Route";
function Order(){
  const [cookies] = useCookies();
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