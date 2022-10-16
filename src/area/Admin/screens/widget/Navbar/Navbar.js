import { memo, useMemo } from 'react';
import { Stack, List } from '@mui/material/';
import {
  Airplay,
  Assignment,
  ShoppingCart,
  AssignmentInd,
  ContentCopy,
  MiscellaneousServices,
  Settings,
  Info,
  Help,
} from '@mui/icons-material/';
import styles from './Navbar.module.css';
import NavbarItem from './Item';
import NavbarAccordion from './Accordion';
import { getAction, routersAdmin } from '~/config/Router';
function Navbar() {
  const Catalogs = useMemo(function () {
    return [
      {
        text: 'Sản phẩm',
        to: getAction(
          routersAdmin.routers.product.index,
          {},
          routersAdmin.area,
        ),
      },
      {
        text: 'Danh mục',
        to: getAction(
          routersAdmin.routers.category.index,
          {},
          routersAdmin.area,
        ),
      },
      {
        text: 'Thương hiệu',
        to: getAction(routersAdmin.routers.brand.index, {}, routersAdmin.area),
      },
    ];
  }, []);
  const Orders = useMemo(function () {
    return [
      {
        text: 'Danh sách',
        to: getAction(routersAdmin.routers.order.index, {}, routersAdmin.area),
      },
      {
        text: 'Giao hàng',
        to: getAction(
          routersAdmin.routers.order.shipment,
          {},
          routersAdmin.area,
        ),
      },
      {
        text: 'Phản hồi',
        to: getAction(
          routersAdmin.routers.order.feedback,
          {},
          routersAdmin.area,
        ),
      },
      {
        text: 'Mã giảm giá',
        to: getAction(
          routersAdmin.routers.order.voucher,
          {},
          routersAdmin.area,
        ),
      },
    ];
  }, []);
  const Customers = useMemo(function () {
    return [
      {
        text: 'Danh sách',
        to:getAction(routersAdmin.routers.user.index,{},routersAdmin.area)
      },
    ];
  }, []);
  const Themes = useMemo(function () {
    return [
      {
        text: 'Widget',
      },
      {
        text: 'Slider',
      },
    ];
  }, []);
  return (
    <Stack className={styles.container}>
      <List disablePadding>
        <NavbarItem
          icon={<Airplay />}
          to={getAction(routersAdmin.area)}
          text="Dashboard"
        />
        <NavbarAccordion
          icon={<Assignment />}
          subData={Catalogs}
          text="Quản lý dữ liệu"
        />
        <NavbarAccordion
          icon={<ShoppingCart />}
          subData={Orders}
          text="Đơn hàng"
        />
        <NavbarAccordion
          icon={<AssignmentInd />}
          subData={Customers}
          text="Khách hàng"
        />
        <NavbarAccordion
          icon={<ContentCopy />}
          subData={Themes}
          text="Giao diện"
        />
        <NavbarItem icon={<MiscellaneousServices />} text="Cấu hình" />
        <NavbarItem icon={<Settings />} text="Hệ thống" />
        <NavbarItem icon={<Info />} text="Báo cáo" />
        <NavbarItem icon={<Help />} text="Trợ giúp" />
      </List>
    </Stack>
  );
}
export default memo(Navbar);
