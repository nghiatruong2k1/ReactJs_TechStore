const regex = /\:[a-zA-Z]{1,}/g;

export const getAction = (str, params, area) => {
  if (typeof str === 'string') {
    const args = str.match(regex);
    if (args && Array.isArray(args)) {
      args.forEach((arg) => {
        const key = arg.replace(':', '');
        str = str.replaceAll(arg, (params && params[key]) || '');
      });
    }
    return `/${area ? (area + '/') : ''}${str}`;
  }
  return '/404';
};

export const routers = {
  home: '',
  product: {
    detail: 'chi-tiet-san-pham/:alias',
    category: 'danh-muc-san-pham/:alias',
    brand: 'thuong-hieu-san-pham/:alias',
    search: 'tim-kiem-san-pham',
  },
  category: {
    index: 'danh-sach-danh-muc',
    search: 'tim-kiem-danh-muc',
  },
  brand: {
    index: 'danh-sach-thuong-hieu',
    search: 'tim-kiem-thuong-hieu',
  },
  profile: {
    index: 'thong-tin',
    orders: 'don-hang',
    settings: 'tuy-chon',
    message: 'thong-bao',
    cart: 'gio-hang',
  },
  post: {
    index: 'tin-tuc',
  },
  about: {},
  notfound: '*',
};

export const routersAdmin = {
  area: 'trang-quan-tri',
  routers: {
    dashboard: '',
    product: {
      index: 'danh-sach-san-pham',
      add: 'them-san-pham',
      update: 'cap-nhat-san-pham:id',
    },
    brand: {
      index: 'danh-sach-thuong-hieu',
      add: 'them-thuong-hieu',
      update: 'cap-nhat-thuong-hieu:id',
    },
    category: {
      index: 'danh-sach-danh-muc',
      add: 'them-danh-muc',
      update: 'cap-nhat-danh-muc:id',
    },
    order: {
      index: 'danh-sach-don-hang',
      update: 'cap-nhat-don-hang/:id',
      add: 'them-don-hang',
      shipment: 'giao-hang',
      feedback: 'phan-hoi',
      voucher: 'ma-giam-gia',
    },
    user: {
      index: 'danh-sach-nguoi-dung',
    },
  },
};
