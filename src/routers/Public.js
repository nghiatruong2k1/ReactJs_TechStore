import { routers } from '~/config/Router';
import {
  HomePage,
  ProductDetailPage,
  ProductsBrandPage,
  ProductsCategoryPage,
  CategorysPage,
  BrandsPage,
  NotfoundPage,
} from '~/screens/page';
import { ProductsLayout } from '~/screens/layout';
export const publicRouters = [
  {
    path: routers.home,
    page: HomePage,
  },
  {
    path: routers.product.detail,
    page: ProductDetailPage,
  },
  {
    path: routers.product.brand,
    page:ProductsBrandPage,
    layout:ProductsLayout
  },
  {
    path: routers.product.category,
    page:ProductsCategoryPage,
    layout:ProductsLayout
  },
  {
    path: routers.product.search,
  },
  {
    path: routers.category.index,
    page: CategorysPage,
  },
  {
    path: routers.category.search,
  },
  {
    path: routers.brand.index,
    page: BrandsPage,
  },
  {
    path: routers.brand.search,
  },
  {
    path: routers.notfound,
    layout: null,
    page: NotfoundPage,
  },
];
