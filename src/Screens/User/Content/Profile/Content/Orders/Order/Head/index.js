import {memo,useContext} from 'react';
import clsx from 'clsx';
import {Stack,Typography,Skeleton,Tooltip,IconButton} from '@mui/material/';
import {} from '@mui/icons-material/';
import styles from './styles.module.css';

import {OrdersContext} from "../../provider";
import {OrderContext} from "../provider";
import { formatDate } from '../../../../../../../../Config/Format';
import { useFetch } from '../../../../../../../../Config/Fetch/';
import { DialogResult } from '../../../../../../../../Components/';
function OrderHead({...props}){
  const Fetch = useFetch();
  const {data,loading,status} = useContext(OrderContext);
  const {handle} = useContext(OrdersContext);
  function handleCancel(action,message){
    !loading && data && data.Id && DialogResult({
      message:message,
      onYes:function(){
        Fetch.put({
          api:`api/Order/${action}/${data.Id}`
          ,onThen:function({data}){
            if(data.value){
              handle.refetch()
            }
          }
        })
      }
    })
  }
  return(
    <Stack direction="row" spacing={2} alignItems="center">
      <Typography sx={{fontWeight:'bold',display:"inline-flex",flex:1}}>
        Mã đơn hàng:
        {
          !loading &&
            `${data && data.Id}`
          || <Skeleton variant="text" sx={{height:'100%',flex:"1"}} />
        }
      </Typography>
      <Typography sx={{fontWeight:'italic',display:"inline-flex",flex:1}}>
        Ngày đặt hàng: 
        {
          !loading &&
          `${formatDate(data && data.CreateDate)}`
          || <Skeleton variant="text" sx={{height:'100%',flex:"1"}} />
        }
      </Typography>
      {
        status === 0 && (
          <Tooltip title={"Hủy đơn hàng"} placement="top" arrow>
            <span>
              <IconButton disabled={loading} onClick={()=>(handleCancel("cancel","Bạn có muốn hủy đơn hàng này?"))}>
                <span className={clsx("fas fa-times")} />
              </IconButton>
            </span>
          </Tooltip>
        )
      }
      {
        status === 3 && (
        <>
          <Tooltip title={"Đặt lại đơn hàng"} placement="top" arrow>
            <span>
              <IconButton disabled={loading} onClick={()=>(handleCancel("recancel","Bạn có muốn đặt lại đơn hàng này?"))}>
                <span className={clsx("fas fa-trash-restore")} />
              </IconButton>
            </span>
          </Tooltip>
          <Tooltip title={"Xóa đơn hàng"} placement="top" arrow>
            <span>
              <IconButton disabled={loading} onClick={()=>(handleCancel("delete","Bạn có muốn xóa đơn hàng này?"))}>
                <span className={clsx("fas fa-trash")} />
              </IconButton>
            </span>
          </Tooltip>
        </>
        )
      }
    </Stack>
  )
}
export default memo(OrderHead);