import {memo} from 'react';
import DataGridView from "../../../../Components/DataGrid";
import {useGetData} from "../../../../Components/DataGrid/provider";
import Title     from "../../../../../../../Components/Title/";
import { getRoute } from '../../../../../../../../../Config/Route/';
import {displays} from "./init";
function Items({...props}){
  const propsGet = useGetData({
    controller:"orderdetail"
  });
  return(
    <DataGridView
      displays={displays}
      {...propsGet}
      {...props}
    />
  )
}
export default memo(Items);