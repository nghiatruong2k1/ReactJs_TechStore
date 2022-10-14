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
import { ProductsLayout, ProfileLayout } from '~/screens/layout';
export const publicRouters = [
  {
    path: routers.home,
    title: '',
    page: HomePage,
  },
  {
    path: routers.product.detail,
    title: '',
    page: ProductDetailPage,
  },
  {
    path: routers.product.brand,
    title: '',
    page:ProductsBrandPage,
    layout:ProductsLayout
  },
  {
    path: routers.product.category,
    title: '',
    page:ProductsCategoryPage,
    layout:ProductsLayout
  },
  {
    path: routers.product.search,
    title: '',
  },
  {
    path: routers.category.index,
    title: '',
    page: CategorysPage,
  },
  {
    path: routers.category.search,
    title: '',
  },
  {
    path: routers.brand.index,
    title: '',
    page: BrandsPage,
  },
  {
    path: routers.brand.search,
    title: '',
  },
  {
    path: routers.notfound,
    title: '404',
    layout: null,
    page: NotfoundPage,
  },
];
