import {memo} from 'react';
import DataGridView from "../../../Components/DataGrid";
import {useGetData} from "../../../Components/DataGrid/provider";
import Title     from "../../../../../../Components/Title/";
import {displays} from "./init";
function BrandList({...props}){
  const propsGet = useGetData({
    controller:"brand"
  });
  return(
    <DataGridView 
      displays={displays}
      {...propsGet}
    >
      <Title text="Quản lý thương hiệu" />
    </DataGridView>
  )
}
export default memo(BrandList);