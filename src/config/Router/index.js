import { NewObject } from '../index';

export class ActionConfig extends String {
  /**
   * title:String,
   * path: String,
   * page:Component,
   * options:{
   *      params:Object,
   *      layout:Component || null
   * }*/
  constructor(title, path, page, options = {}) {
    super(path ?? '/404');
    const regex = /:[a-zA-Z]{1,}/g;
    const { params, layout } = options;
    const _this = this;
    Object.defineProperty(_this, 'title', {
      enumerable: false,
      writable: true,
      value: title,
    });
    Object.defineProperty(_this, 'params', {
      enumerable: false,
      value: params,
    });
    Object.defineProperty(_this, 'layout', {
      enumerable: false,
      writable: true,
      value: layout,
    });
    Object.defineProperty(_this, 'page', {
      enumerable: false,
      value: page,
    });
    Object.defineProperty(_this, 'parent', {
      enumerable: false,
      writable: true,
    });
    Object.defineProperty(this, 'getLayout', {
      enumerable: false,
      value: function () {
        let rs = layout;
        let parent = _this.parent;
        while (rs === undefined && parent) {
          rs = parent?.layout;
          parent = parent?.parent;
        }
        return rs;
      },
    });
    Object.defineProperty(_this, 'getAction', {
      enumerable: false,
      value: function (values) {
        let str = `/${path}`;
        let parent = _this.parent;
        do {
          const parentPath = parent?.path;
          str = (parentPath ? '/' + parentPath : '') + str;
          parent = parent?.parent;
        } while (parent);
        if (typeof str === 'string') {
          const args = str.match(regex);
          if (args && Array.isArray(args)) {
            args.forEach((arg) => {
              const key = arg.replace(':', '');
              str = str.replaceAll(
                arg,
                (values && values[key]) || params?.[key] || '',
              );
            });
          }
          return str;
        }
        return '/404';
      },
    });
  }
}
export class ControllerConfig extends NewObject {
  /**
   * path: string,
   * actions:{
   *    action:ActionConfig
   * },
   * options:{
   *    checkpage:Component || null,
   *    layout:Component || null,
   *    title:String
   * }*/
  constructor(path, actions, options = {}) {
    super();
    const { checkpage, layout, title } = options;
    Object.defineProperty(this, 'title', { enumerable: false, value: title });
    Object.defineProperty(this, 'checkpage', {
      enumerable: false,
      value: checkpage,
    });
    Object.defineProperty(this, 'parent', {
      enumerable: false,
      writable: true,
    });
    Object.defineProperty(this, 'layout', {
      enumerable: false,
      writable: true,
      value: layout,
    });
    Object.defineProperty(this, 'path', { enumerable: false, value: path });
    Object.keys(actions).forEach((key) => {
      if (actions[key] instanceof ActionConfig) {
        this[key] = actions[key];
        this[key].parent = this;
      }
    });
  }
}

export class RouterConfig extends NewObject {
  /** routes: {
   *    router:ControllerConfig || ActionConfig
   * }
   * options:{
   *    checkpage:Component || null,
   *    layout:Component || null,
   * }*/
  constructor(path, routes, options = {}) {
    super();
    const { checkpage, layout } = options;
    Object.defineProperty(this, 'checkpage', {
      enumerable: false,
      value: checkpage,
    });
    Object.defineProperty(this, 'path', { enumerable: false, value: path });
    Object.defineProperty(this, 'layout', { enumerable: false, value: layout });
    Object.keys(routes).forEach((key) => {
      if (
        routes[key] instanceof ControllerConfig ||
        routes[key] instanceof ActionConfig
      ) {
        this[key] = routes[key];
        this[key].parent = this;
      }
    });
  }
}

// new Router('trang-quan-tri', {
//   dashboard: new ActionConfig('Dashboard', ''),
//   product: new ControllerConfig('', '', {
//     index: new ActionConfig('Quản lý sản phẩm', 'quan-ly-san-pham'),
//     add: new ActionConfig('Thêm sản phẩm', 'them-san-pham'),
//     update: new ActionConfig('Cập nhật sản phẩm', 'cap-nhat-san-pham/:id'),
//     image: new ActionConfig('Hình ảnh sản phẩm', 'hinh-anh-san-pham/:id'),
//   }),
//   brand: new ControllerConfig('', '', {
//     index: new ActionConfig('Quản lý thương hiệu', 'quan-ly-thuong-hieu'),
//     add: new ActionConfig('Thêm thương hiệu', 'them-thuong-hieu'),
//     update: new ActionConfig('Cập nhật thương hiệu', 'cap-nhat-thuong-hieu/:id'),
//   }),
//   category: new ControllerConfig('', '', {
//     index: new ActionConfig('Quản lý danh mục', 'quan-ly-danh-muc'),
//     add: new ActionConfig('Thêm danh mục', 'them-danh-muc'),
//     update: new ActionConfig('Cập nhật danh mục', 'cap-nhat-danh-muc/:id'),
//   }),
//   user: new ControllerConfig('', '', {
//     index: new ActionConfig('Quản lý tài khoản', 'quan-ly-tai-khoan'),
//     add: new ActionConfig('Thêm tài khoản', 'them-tai-khoan'),
//     update: new ActionConfig('Cập nhật tài khoản', 'cap-nhat-tai-khoan/:id'),
//   }),
//   image: new ControllerConfig('', '', {
//     index: new ActionConfig('Quản lý hình ảnh', 'quan-ly-hinh-anh'),
//     add: new ActionConfig('Thêm hình ảnh', 'them-hinh-anh'),
//     update: new ActionConfig('Cập nhật hình ảnh', 'cap-nhat-hinh-anh/:id'),
//   }),
//   order: new ControllerConfig('', '', {
//     index: new ActionConfig('Quản lý đơn hàng', 'danh-sach-don-hang'),
//     detail: new ActionConfig('Chi tiết đơn hàng', 'chi-tiet-don-hang/:id'),
//     update: new ActionConfig('Cập nhật đơn hàng', 'cap-nhat-don-hang/:id'),
//     add: new ActionConfig('Thêm đơn hàng', 'them-don-hang'),
//     shipment: new ActionConfig('Giao hàng', 'giao-hang'),
//     feedback: new ActionConfig('Phản hồi', 'phan-hoi'),
//     voucher: new ActionConfig('Mã giảm giá', 'ma-giam-gia'),
//   }),
// });
