import {memo,useContext,useMemo} from 'react';
import {useCookies} from 'react-cookie'
import clsx from 'clsx';
import {Badge} from '@mui/material/';
import styles from '../styles.module.css';
import {OptionButton} from "../index";
import {getRoute} from "../../../../../Config/Route/";
function Message(){
  const {auth} = useContext(global.config.AppContext);
  return(
      <OptionButton
        show={auth.state.user}
        title="Thông báo"
        to={getRoute("user","profile","message")}
        icon = {(
          <Badge badgeContent="0" color="info" max={99}>
            <span className={clsx("fa fa-comment-dots",styles.icon)}/>
          </Badge>
        )}
      >      
      </OptionButton>
  )
  
}
export default memo(Message);