class Action extends String {
  constructor(_title, _path, _defaultParams) {
    super(_path);
    let regex = /\:[a-zA-Z]{1,}/g;
    this.title = _title;
    this.valueOf = function () {
      return `${_path}`;
    };
    this.setParent = function (_parent) {
      this.parent = _parent;
    };

    this.getAction = function (params) {
      let area = this.parent?.parent?.path;
      let controller = this.parent?.path;
      let str = `/${area ? area + '/' : ''}${
        controller ? controller + '/' : ''
      }${_path}`;
      if (typeof str === 'string') {
        const args = str.match(regex);
        if (args && Array.isArray(args)) {
          args.forEach((arg) => {
            const key = arg.replace(':', '');
            str = str.replaceAll(
              arg,
              (params && params[key]) || _defaultParams?.[key] || '',
            );
          });
        }
        return str;
      }
      return '/404';
    };
    Object.defineProperty(this, 'title', { enumerable: false, writable: true });
    Object.defineProperty(this, 'setParent', { enumerable: false });
    Object.defineProperty(this, 'valueOf', { enumerable: false });
    Object.defineProperty(this, 'parent', {
      enumerable: false,
      writable: true,
    });
    Object.defineProperty(this, 'getAction', { enumerable: false });
  }
}
class Controller {
  constructor(path, actions) {
    this.path = path;
    this.setParent = function (parent) {
      this.parent = parent;
    };
    Object.keys(actions).forEach((key) => {
      this[key] = actions[key];
      this[key].setParent(this);
    });
    Object.defineProperty(this, 'path', { enumerable: false, writable: true });
    Object.defineProperty(this, 'setParent', { enumerable: false });
    Object.defineProperty(this, 'parent', {
      enumerable: false,
      writable: true,
    });
  }
}

class Router {
  constructor(path, routers) {
    this.path = path;
    Object.keys(routers).forEach((key) => {
      this[key] = routers[key];
      this[key].setParent(this);
    });

    Object.defineProperty(this, 'path', { enumerable: false, writable: true });
  }
}

export const routers = new Router('', {
  home: new Action('', ''),
  product: new Controller('', {
    detail: new Action('Chi tiết sản phẩm', 'chi-tiet-san-pham/:alias'),
    category: new Action('Danh mục sản phẩm', 'danh-muc-san-pham/:alias'),
    brand: new Action('Thương hiệu sản phẩm', 'thuong-hieu-san-pham/:alias'),
    search: new Action('Tìm kiếm sản phẩm', 'tim-kiem-san-pham'),
  }),
  category: new Controller('', {
    index: new Action('Danh mục', 'danh-sach-danh-muc'),
    search: new Action('Tìm kiếm danh mục', 'tim-kiem-danh-muc'),
  }),
  brand: new Controller('', {
    index: new Action('Thương hiệu', 'danh-sach-thuong-hieu'),
    search: new Action('Tìm kiếm thương hiệu', 'tim-kiem-thuong-hieu'),
  }),
  profile: new Controller('', {
    index: new Action('Thương hiệu', 'thong-tin-tai-khoan'),
    orders: new Action('Đơn hàng', 'don-hang'),
    settings: new Action('Tùy chọn', 'tuy-chon'),
    message: new Action('Thông báo', 'thong-bao'),
    cart: new Action('Giỏ hàng', 'gio-hang'),
  }),
  post: new Controller('', {
    index: new Action('Tin tức', 'tin-tuc'),
  }),
  about: new Controller('', {}),
  notfound: new Action('Not Found', '*'),
});

export const routersAdmin = new Router('trang-quan-tri', {
  dashboard: new Action('Dashboard', ''),
  product: new Controller('', {
    index: new Action('Quản lý sản phẩm', 'quan-ly-san-pham'),
    add: new Action('Thêm sản phẩm', 'them-san-pham'),
    update: new Action('Cập nhật sản phẩm', 'cap-nhat-san-pham/:id'),
    image: new Action('Hình ảnh sản phẩm', 'hinh-anh-san-pham/:id'),
  }),
  brand: new Controller('', {
    index: new Action('Quản lý thương hiệu', 'quan-ly-thuong-hieu'),
    add: new Action('Thêm thương hiệu', 'them-thuong-hieu'),
    update: new Action('Cập nhật thương hiệu', 'cap-nhat-thuong-hieu/:id'),
  }),
  category: new Controller('', {
    index: new Action('Quản lý danh mục', 'quan-ly-danh-muc'),
    add: new Action('Thêm danh mục', 'them-danh-muc'),
    update: new Action('Cập nhật danh mục', 'cap-nhat-danh-muc/:id'),
  }),
  user: new Controller('', {
    index: new Action('Quản lý tài khoản', 'quan-ly-tai-khoan'),
    add: new Action('Thêm tài khoản', 'them-tai-khoan'),
    update: new Action('Cập nhật tài khoản', 'cap-nhat-tai-khoan/:id'),
  }),
  image: new Controller('', {
    index: new Action('Quản lý hình ảnh', 'quan-ly-hinh-anh'),
    add: new Action('Thêm hình ảnh', 'them-hinh-anh'),
    update: new Action('Cập nhật hình ảnh', 'cap-nhat-hinh-anh/:id'),
  }),
  order: new Controller('', {
    index: new Action('Quản lý đơn hàng', 'danh-sach-don-hang'),
    detail: new Action('Chi tiết đơn hàng', 'chi-tiet-don-hang/:id'),
    update: new Action('Cập nhật đơn hàng', 'cap-nhat-don-hang/:id'),
    add: new Action('Thêm đơn hàng', 'them-don-hang'),
    shipment: new Action('Giao hàng', 'giao-hang'),
    feedback: new Action('Phản hồi', 'phan-hoi'),
    voucher: new Action('Mã giảm giá', 'ma-giam-gia'),
  }),
});
