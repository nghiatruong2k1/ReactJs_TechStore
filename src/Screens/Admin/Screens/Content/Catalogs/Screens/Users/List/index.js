import {memo} from 'react';
import DataGridView from "../../../Components/DataGrid";
import {useGetData} from "../../../Components/DataGrid/provider";
import Title     from "../../../../../../Components/Title/";
import {displays} from "./init";
function UserList({...props}){
  const propsGet = useGetData({
    controller:"user"
  });
  return(
    <DataGridView
      displays={displays}
      {...propsGet}
    >
      <Title text="Quản lý khách hàng" />
    </DataGridView>
  )
}
export default memo(UserList);