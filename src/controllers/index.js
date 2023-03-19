import { ActionConfig, ControllerConfig } from '~/config/Controller';
export const DefaultController = new ControllerConfig({
  home: new ActionConfig('', ''),
  notfound: new ActionConfig('Not Found', '*'),
});
export const ProductController = new ControllerConfig(
  {
    detail: new ActionConfig('Chi tiết sản phẩm', 'chi-tiet-san-pham/:alias'),
    category: new ActionConfig('Danh mục sản phẩm', 'danh-muc-san-pham/:alias'),
    brand: new ActionConfig(
      'Thương hiệu sản phẩm',
      'thuong-hieu-san-pham/:alias',
    ),
    search: new ActionConfig('Tìm kiếm sản phẩm', 'tim-kiem-san-pham/:query'),
  },
  { title: 'Sản phẩm' },
);

export const BrandController = new ControllerConfig(
  {
    index: new ActionConfig('Thương hiệu', 'danh-sach-thuong-hieu'),
    search: new ActionConfig('Tìm kiếm thương hiệu', 'tim-kiem-thuong-hieu'),
  },
  { title: 'Thương hiệu' },
);
export const CategoryController = new ControllerConfig(
  {
    index: new ActionConfig('Danh mục', 'danh-sach-danh-muc'),
    search: new ActionConfig('Tìm kiếm danh mục', 'tim-kiem-danh-muc'),
  },
  { title: 'Danh mục' },
);

export const CartController = new ControllerConfig({
  index: new ActionConfig('Giỏ hàng', 'gio-hang'),
});

export const ProfileController = new ControllerConfig({
  index: new ActionConfig('Thông tin tài khoản', 'thong-tin-tai-khoan'),
  orders: new ActionConfig('Đơn hàng', 'don-hang'),
  settings: new ActionConfig('Tùy chọn', 'tuy-chon'),
  message: new ActionConfig('Thông báo', 'thong-bao'),
});
