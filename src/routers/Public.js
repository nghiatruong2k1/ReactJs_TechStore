import {
  HomePage,
   ProductDetailPage,
   ProductsBrandPage,
   ProductsCategoryPage,
  CategorysPage,
  BrandsPage,
  NotfoundPage,
} from '~/screens/page';
import { ActionConfig, ControllerConfig, RouterConfig } from '~/config/Router';
import { DefaultLayout, ProductsLayout } from '~/screens/layout';
export const publicRouters = new RouterConfig(
  '',
  {
    home: new ActionConfig('', '', HomePage),
    product: new ControllerConfig('', {
      detail: new ActionConfig(
        'Chi tiết sản phẩm',
        'chi-tiet-san-pham/:alias',
        ProductDetailPage,
      ),
      category: new ActionConfig(
        'Danh mục sản phẩm',
        'danh-muc-san-pham/:alias',
        ProductsCategoryPage,
        {
          layout: ProductsLayout,
        },
      ),
      brand: new ActionConfig(
        'Thương hiệu sản phẩm',
        'thuong-hieu-san-pham/:alias',
        ProductsBrandPage,
        {
          layout: ProductsLayout,
        },
      ),
      search: new ActionConfig('Tìm kiếm sản phẩm', 'tim-kiem-san-pham'),
    }),
    category: new ControllerConfig('', {
      index: new ActionConfig(
        'Danh mục',
        'danh-sach-danh-muc',
        CategorysPage
      ),
      search: new ActionConfig('Tìm kiếm danh mục', 'tim-kiem-danh-muc'),
    }),
    brand: new ControllerConfig('', {
      index: new ActionConfig(
        'Thương hiệu',
        'danh-sach-thuong-hieu',
        BrandsPage,
      ),
      search: new ActionConfig('Tìm kiếm thương hiệu', 'tim-kiem-thuong-hieu'),
    }),
    // post: new ControllerConfig('', {
    //   index: new ActionConfig('Tin tức', 'tin-tuc'),
    // }),
    // about: new ControllerConfig('', {}),
    notfound: new ActionConfig(
      'Not Found',
      '*',
      NotfoundPage,
      {
        layout: null,
      },
    ),
  },
  { layout: DefaultLayout },
);
