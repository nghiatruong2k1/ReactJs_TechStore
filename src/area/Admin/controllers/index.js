import {
  ActionConfig,
  AreaConfig,
  ControllerConfig,
} from '~/config/Controller';
export const AdminArea = new AreaConfig('trang-quan-tri', 'Trang quản trị');

export class AdminControllerConfig extends ControllerConfig {
  constructor(actions, option) {
    super(actions, option);
    this.parent = AdminArea;
  }
}
export const AdminDashboardController = new AdminControllerConfig({
  index: new ActionConfig('Dashboard', ''),
});
export const AdminProductController = new AdminControllerConfig({
  index: new ActionConfig('Danh sách sản phẩm', 'danh-sach-san-pham'),
  add: new ActionConfig('Thêm sản phẩm', 'them-san-pham'),
  update: new ActionConfig('Cập nhật sản phẩm', 'cap-nhat-san-pham/:id'),
});
export const AdminBrandController = new AdminControllerConfig({
  index: new ActionConfig('Danh sách thương hiệu', 'danh-sach-thuong-hieu'),
  add: new ActionConfig('Thêm thương hiệu', 'them-thuong-hieu'),
  update: new ActionConfig('Cập nhật thương hiệu', 'cap-nhat-thuong-hieu/:id'),
});
export const AdminCategoryController = new AdminControllerConfig({
  index: new ActionConfig('Danh sách danh mục', 'danh-sach-danh-muc'),
  add: new ActionConfig('Thêm danh mục', 'them-danh-muc'),
  update: new ActionConfig('Cập nhật danh mục', 'cap-nhat-danh-muc/:id'),
});
