import { routers } from '~/config/Router';
import {
  HomePage,
  NotfoundPage,
  CategorysPage,
  BrandsPage,
  ProductDetailPage,
  ProductsBrandPage,
  ProductsCategoryPage,
} from '~/screens/page';
import { ProductsLayout } from '~/screens/layout';
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
    path: routers.profile.index,
    title: '',
  },
  {
    path: routers.profile.cart,
    title: '',
  },
  {
    path: routers.profile.message,
    title: '',
  },
  {
    path: routers.profile.orders,
    title: '',
  },
  {
    path: routers.profile.settings,
    title: '',
  },
  {
    path: routers.notfound,
    title: '404',
    layout: null,
    page: NotfoundPage,
  },
];
