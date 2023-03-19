import {
  AdminBrandPage,
  AdminCategoryPage,
  AdminDashboardPage,
  AdminImagePage,
  AdminOrderDetailPage,
  AdminOrderPage,
  AdminProductImagePage,
  AdminProductPage,
  AdminUserPage,
  CatalogAddBrandPage,
  CatalogAddCategoryPage,
  CatalogAddProductPage,
  CatalogAddUserPage,
  CatalogUpdateBrandPage,
  CatalogUpdateCategoryPage,
  CatalogUpdateOrderPage,
  CatalogUpdateProductPage,
  CatalogUpdateUserPage,
} from '~/area/Admin/screens/page';
import { AdminDefaultLayout } from '~/area/Admin/screens/layout';
import { CheckAdminPrivate } from '~/area/Admin/private';
import { Routers } from '~/config/Routers';
import {
  AdminArea,
  AdminDashboardController,
  AdminProductController,
} from './controllers';
export const adminRouters = new Routers(
  [
    [AdminDashboardController.index, AdminDashboardPage],
    // [AdminProductController.index, AdminProductPage],
    // [AdminProductController.add, CatalogAddProductPage],
    // [AdminProductController.update, CatalogUpdateProductPage],
  ],
  {
    title: AdminArea.title,
    path: AdminArea.path,
    page: CheckAdminPrivate,
    layout: AdminDefaultLayout,
  },
);
export const adminRouter = {
  // defaultLayout: AdminDefaultLayout,
  // path: adminRouters.path,
  // element: CheckAdminPrivate,
  // routes: [
  //   {
  //     path: adminRouters.dashboard,
  //     page: AdminDashboardPage,
  //   },
  //   {
  //     path: adminRouters.product.index,
  //     page: AdminProductPage,
  //   }, {
  //     path: adminRouters.product.add,
  //     page: CatalogAddProductPage,
  //   },
  //   {
  //     path: adminRouters.product.update,
  //     page: CatalogUpdateProductPage,
  //   },{
  //     path: adminRouters.product.image,
  //     page: AdminProductImagePage,
  //   },
  //   {
  //     path: adminRouters.category.index,
  //     page: AdminCategoryPage,
  //   },
  //   {
  //     path: adminRouters.category.add,
  //     page: CatalogAddCategoryPage,
  //   },
  //   {
  //     path: adminRouters.category.update,
  //     page: CatalogUpdateCategoryPage,
  //   },
  //   {
  //     path: adminRouters.brand.index,
  //     page: AdminBrandPage,
  //   },
  //   {
  //     path: adminRouters.brand.add,
  //     page: CatalogAddBrandPage,
  //   },
  //   {
  //     path: adminRouters.brand.update,
  //     page: CatalogUpdateBrandPage,
  //   },
  //   {
  //     path: adminRouters.order.index,
  //     page: AdminOrderPage,
  //   },    {
  //     path: adminRouters.order.update,
  //     page: CatalogUpdateOrderPage,
  //   },
  //   {
  //     path: adminRouters.order.detail,
  //     page: AdminOrderDetailPage,
  //   },
  //   {
  //     path: adminRouters.user.index,
  //     page: AdminUserPage,
  //   },
  //   {
  //     path: adminRouters.user.update,
  //     page: CatalogUpdateUserPage,
  //   },
  //   {
  //     path: adminRouters.image.index,
  //     page: AdminImagePage,
  //   },
  // ],
};
