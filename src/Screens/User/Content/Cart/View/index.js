import {memo,useContext,Fragment} from 'react';
import {
  Paper,
  TableContainer,
  Table,
  TableHead,
  TableRow,
  TableCell,
} from '@mui/material/';

import {ViewContent} from "../../../../../Components/"
import Product from "./Product/";
function View({...props}){
  const {cart} = useContext(global.config.UserContext);
  return(
    <TableContainer component={Paper} sx={{p:2}}>
      <Table stickyHeader>
          <TableHead className="text-muted">
            <TableRow className="small text-uppercase">
              <TableCell className="col-6">Sản phẩm</TableCell>
              <TableCell className="col-2">Số lượng</TableCell>
              <TableCell className="col-2">Giá</TableCell>
              <TableCell className="col-2"> </TableCell>
            </TableRow>
          </TableHead>
          <tbody>
            <ViewContent component={TableRow} childrenComponent={TableCell} loading={false} empty="Giỏ hàng của bạn trống" length={cart.handle.getCount()}>
              {
                cart.state.datas.map(function(data,index){                 
                  if(data){
                    return(<Product data={data} index={index} key={index} />)
                  }else{
                    return <Fragment key={index}></Fragment>
                  }
                })
              }
            </ViewContent>
          </tbody>
      </Table >
    </TableContainer>
  )
}
export default memo(View);