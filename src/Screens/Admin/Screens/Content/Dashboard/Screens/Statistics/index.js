import {memo,useState} from 'react';
import clsx from 'clsx';
import {
  Grid,
  Stack,
  Tooltip,
  IconButton
} from '@mui/material/';
import {
  BarChart,Add,Remove
} from '@mui/icons-material/';

import {getRoute} from "../../../../../../../Config/Route/";
import {Accordion} from "../../../../../Components/";
import CardStatistic from "./CardStatistic/";
import styles from './styles.module.css';
function Statistics({...props}){
  const [isOpen,setOpen] = useState(true);
  function toggleOpen(event){
    setOpen(!isOpen)
  }
  return(
      <Accordion 
        title="Thống kê"
        {...props}
      >
        <Grid container columnSpacing={2} rowSpacing={2}>
            <CardStatistic 
              api="api/admin/order/count"
              to={getRoute("admin","order","index")} 
              title="Đơn hàng"
              cardProps={{sx:{backgroundColor:'#17a2b8'}}}
              xs={12} sm={6} lg={3} xl={4} 
            />
            <CardStatistic 
              api="api/admin/user/count" 
              to={getRoute("admin","user","index")}
              title="Tài khoản"
              cardProps={{sx:{backgroundColor:'#28a745'}}}
              xs={12} sm={6} lg={3} xl={4} 
            />
            <CardStatistic 
              title="Lượt truy cập"
              to={getRoute("admin","user","dashboard")}
              cardProps={{sx:{backgroundColor:'#dc3545'}}}
              xs={12} sm={6} lg={3} xl={4} 
            />
            <CardStatistic               
              title="Phản hồi"
              cardProps={{sx:{backgroundColor:'#ffc107'}}}
              xs={12} sm={6} lg={3} xl={4} 
            />
        </Grid>
      </Accordion>    
  )
}
export default memo(Statistics);