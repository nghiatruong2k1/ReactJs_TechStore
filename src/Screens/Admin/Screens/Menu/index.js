import {memo,useMemo} from 'react';
import {
  Stack,
  List
} from '@mui/material/';
import {
  Airplay,
  Assignment,
  ShoppingCart,
  AssignmentInd,
  ContentCopy,
  MiscellaneousServices,
  Settings,
  Info,
  Help
} from '@mui/icons-material/';
import styles from './styles.module.css';
import MenuItem from "./Item/";
import MenuAccordion from "./Accordion/";
import {getRoute} from "../../../../Config/Route/";
function Menu({...props}){
  const Catalogs = useMemo(function(){
    return[{
      text:"Sản phẩm",
      to:getRoute("admin","product","index")
    },{
      text:"Danh mục",
      to:getRoute("admin","category","index")
    },{
      text:"Thương hiệu",
      to:getRoute("admin","brand","index")
    }]
  },[]);
  const Orders = useMemo(function(){
    return[{
      text:"Danh sách",
      to:getRoute("admin","order","index")
    },{
      text:"Giao hàng",
      to:getRoute("admin","order","shipment")
    },{
      text:"Phản hồi",
      to:getRoute("admin","order","request")
    },{
      text:"Mã giảm giá",
      to:getRoute("admin","order","voucher")
    }]
  },[]);
  const Customers = useMemo(function(){
    return[{
      text:"Danh sách",
      to:getRoute("admin","user","index")
    },{
      text:"Phản hồi",
      to:getRoute("admin","user","vendors")
    }]
  },[]);
  const Themes = useMemo(function(){
    return[{
      text:"Widget",
      to:getRoute("admin","theme","widget")
    },{
      text:"Slider",
      to:getRoute("admin","theme","slider")
    }]
  },[]);
  return(
    <Stack className={styles.container}>
      <List disablePadding>
        <MenuItem icon={<Airplay />} to={getRoute("admin","dashboard","index")} text="Dashboard"/>
        <MenuAccordion icon={<Assignment />} subData={Catalogs} text="Quản lý dữ liệu"/>
        <MenuAccordion icon={<ShoppingCart/>} subData={Orders} text="Đơn hàng"/>
        <MenuAccordion icon={<AssignmentInd/>} subData={Customers}text="Khách hàng"/>
        <MenuAccordion icon={<ContentCopy/>} subData={Themes}text="Giao diện"/>
        <MenuItem icon={<MiscellaneousServices />}text="Cấu hình"/>
        <MenuItem icon={<Settings />}text="Hệ thống"/>
        <MenuItem icon={<Info />}text="Báo cáo"/>
        <MenuItem icon={<Help />}text="Trợ giúp"/>
      </List>
    </Stack>
  )
}
export default memo(Menu);