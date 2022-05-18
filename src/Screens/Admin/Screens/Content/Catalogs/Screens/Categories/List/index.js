import {memo} from 'react';
import DataGridView from "../../../Components/DataGrid";
import {useGetData} from "../../../Components/DataGrid/provider";
import Title     from "../../../../../../Components/Title/";
import {displays} from "./init";
function CategoryList({...props}){
  const propsGet = useGetData({
    controller:"category"
  });
  return(
    <DataGridView 
      displays={displays}
      {...propsGet}
    >
      <Title text="Quản lý danh mục" />
    </DataGridView>
  )
}
export default memo(CategoryList);