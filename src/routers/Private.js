import { ActionConfig, ControllerConfig, RouterConfig } from '~/config/Router';
import { DefaultLayout, ProfileLayout } from '~/screens/layout';

import CheckLoginPrivate from '~/private';
import { CartPage } from '~/screens/page';
export const privateRouters = new RouterConfig(
  '',
  {
    profile: new ControllerConfig(
      '',
      {
        index: new ActionConfig(
          'Thông tin tài khoản',
          'thong-tin-tai-khoan',
          //ProfilePage ,
        ),
        orders: new ActionConfig('Đơn hàng', 'don-hang', 
        //OrdersPage
        ),
        settings: new ActionConfig('Tùy chọn', 'tuy-chon'),
        message: new ActionConfig('Thông báo', 'thong-bao'),
      },
      {
        layout: ProfileLayout,
      },
    ),
    cart: new ControllerConfig('', {
      index: new ActionConfig('Giỏ hàng', 'gio-hang',
      //CartPage
      ),
    }),
  },
  {
    layout: DefaultLayout,
    checkpage: CheckLoginPrivate,
  },
);
