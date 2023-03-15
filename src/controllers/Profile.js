import { ActionConfig, ControllerConfig } from '~/config/Controller';

export const ProfileController = new ControllerConfig({
  index: new ActionConfig(
    'Thông tin tài khoản',
    'thong-tin-tai-khoan',
  ),
  orders: new ActionConfig('Đơn hàng', 'don-hang'),
  settings: new ActionConfig('Tùy chọn', 'tuy-chon'),
  message: new ActionConfig('Thông báo', 'thong-bao'),
});