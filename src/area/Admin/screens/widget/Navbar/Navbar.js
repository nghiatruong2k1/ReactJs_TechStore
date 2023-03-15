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
import {  routersAdmin } from '~/config/Router';
function NavbarComponent() {
  const Catalogs = useMemo(function () {
    return [
      {
        text: 'Sản phẩm',
        //to: adminRouters.product.index.getAction(),
      },
      {
        text: 'Danh mục',
        //to: adminRouters.category.index.getAction(),
      },
      {
        text: 'Thương hiệu',
        //to: adminRouters.brand.index.getAction(),
      },
      {
        text: 'Hình ảnh',
        //to: adminRouters.image.index.getAction(),
      },
    ];
  }, []);
  const Orders = useMemo(function () {
    return [
      {
        text: 'Danh sách',
        //to: adminRouters.order.index.getAction(),
      },
      {
        text: 'Giao hàng',
        //to: adminRouters.order.shipment.getAction(),
      },
      {
        text: 'Phản hồi',
        //to: adminRouters.order.feedback.getAction(),
      },
      {
        text: 'Mã giảm giá',
        //to: adminRouters.order.voucher.getAction(),
      },
    ];
  }, []);
  const Customers = useMemo(function () {
    return [
      {
        text: 'Danh sách',
        //to: adminRouters.user.index.getAction(),
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
          //to={adminRouters.dashboard.getAction()}
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
export default memo(NavbarComponent);
