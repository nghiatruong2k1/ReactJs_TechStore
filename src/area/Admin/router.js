import { routersAdmin } from '~/config/Router';
import {
  AdminBrandPage,
  AdminCategoryPage,
  AdminDashboardPage,
  AdminImagePage,
  AdminOrderDetailPage,
  AdminOrderPage,
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
export const adminRouters = {
  defaultLayout: AdminDefaultLayout,
  path: routersAdmin.area,
  element: CheckAdminPrivate,
  routes: [
    {
      path: routersAdmin.dashboard,
      page: AdminDashboardPage,
    },
    {
      path: routersAdmin.product.index,
      page: AdminProductPage,
    }, {
      path: routersAdmin.product.add,
      page: CatalogAddProductPage,
    },
    {
      path: routersAdmin.product.update,
      page: CatalogUpdateProductPage,
    },
    {
      path: routersAdmin.category.index,
      page: AdminCategoryPage,
    },
    {
      path: routersAdmin.category.add,
      page: CatalogAddCategoryPage,
    },
    {
      path: routersAdmin.category.update,
      page: CatalogUpdateCategoryPage,
    },
    {
      path: routersAdmin.brand.index,
      page: AdminBrandPage,
    },
    {
      path: routersAdmin.brand.add,
      page: CatalogAddBrandPage,
    },
    {
      path: routersAdmin.brand.update,
      page: CatalogUpdateBrandPage,
    },
    {
      path: routersAdmin.order.index,
      page: AdminOrderPage,
    },    {
      path: routersAdmin.order.update,
      page: CatalogUpdateOrderPage,
    },
    {
      path: routersAdmin.order.detail,
      page: AdminOrderDetailPage,
    },
    {
      path: routersAdmin.user.index,
      page: AdminUserPage,
    },
    {
      path: routersAdmin.user.update,
      page: CatalogUpdateUserPage,
    },
    {
      path: routersAdmin.image.index,
      page: AdminImagePage,
    },
  ],
};
