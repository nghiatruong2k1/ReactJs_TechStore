import {memo} from 'react';
import clsx from 'clsx';
import {
  Stack,
  Grid,
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
function Menu({...props}){
  const Catalogs = [{
    text:"Sản phẩm",
    to:"catalog/product"
  },{
    text:"Danh mục",
    to:"catalog/category"
  },{
    text:"Thương hiệu",
    to:"catalog/brand"
  },{
    text:"Hình ảnh",
    to:"catalog/image"
  }];
  const Sales = [{
    text:"Orders",
    to:"sale/orders"
  },{
    text:"Shipments",
    to:"sale/shipments"
  },{
    text:"Return requests",
    to:"sale/return-requests"
  },{
    text:"Gift cards",
    to:"sale/gift-cards"
  }];
  const Customers = [{
    text:"List",
    to:"customer/list"
  },{
    text:"Roles",
    to:"customer/roles"
  },{
    text:"Online",
    to:"customer/online"
  },{
    text:"Vendors",
    to:"customer/vendors"
  }];
  return(
    <Stack className={styles.container}>
      <List disablePadding>
        <MenuItem icon={<Airplay />}to="" text="Dashboard"/>
        <MenuAccordion icon={<Assignment />} subData={Catalogs} text="Bảng"/>
        <MenuAccordion icon={<ShoppingCart/>} subData={Sales} text="Đơn hàng"/>
        <MenuAccordion icon={<AssignmentInd/>} subData={Customers}text="Khách hàng"/>
        <MenuItem icon={<ContentCopy />}text="Contents"/>
        <MenuItem icon={<MiscellaneousServices />}text="Configuration"/>
        <MenuItem icon={<Settings />}text="System"/>
        <MenuItem icon={<Info />}text="Reports"/>
        <MenuItem icon={<Help />}text="Help"/>
      </List>
    </Stack>
  )
}
export default memo(Menu);