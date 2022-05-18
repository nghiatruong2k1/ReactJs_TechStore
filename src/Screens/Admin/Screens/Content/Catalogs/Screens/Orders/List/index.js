import {memo} from 'react';
import DataGridView from "../../../Components/DataGrid";
import {useGetData} from "../../../Components/DataGrid/provider";
import Title     from "../../../../../../Components/Title/";
import {displays} from "./init";
function OrderList({...props}){
  const propsGet = useGetData({
    controller:"order"
  });
  return(
    <DataGridView
      displays={displays}
      {...propsGet}
    >
      <Title text="Quản lý đơn hàng" />
    </DataGridView>
  )
}
export default memo(OrderList);