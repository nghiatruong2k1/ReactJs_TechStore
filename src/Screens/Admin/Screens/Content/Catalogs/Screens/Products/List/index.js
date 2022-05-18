import {memo} from 'react';
import DataGridView from "../../../Components/DataGrid";
import {useGetData} from "../../../Components/DataGrid/provider";
import Title     from "../../../../../../Components/Title/";
import { getRoute } from '../../../../../../../../Config/Route/';
import {displays} from "./init";
function ProductList({...props}){
  const propsGet = useGetData({
    controller:"product"
  });
  return(
    <DataGridView
      displays={displays}
      {...propsGet}
    >
      <Title text="Quản lý sản phẩm" />
    </DataGridView>
  )
}
export default memo(ProductList);