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
      path: routersAdmin.routers.dashboard,
      page: AdminDashboardPage,
    },
    {
      path: routersAdmin.routers.product.index,
      page: AdminProductPage,
    }, {
      path: routersAdmin.routers.product.add,
      page: CatalogAddProductPage,
    },
    {
      path: routersAdmin.routers.product.update,
      page: CatalogUpdateProductPage,
    },
    {
      path: routersAdmin.routers.category.index,
      page: AdminCategoryPage,
    },
    {
      path: routersAdmin.routers.category.add,
      page: CatalogAddCategoryPage,
    },
    {
      path: routersAdmin.routers.category.update,
      page: CatalogUpdateCategoryPage,
    },
    {
      path: routersAdmin.routers.brand.index,
      page: AdminBrandPage,
    },
    {
      path: routersAdmin.routers.brand.add,
      page: CatalogAddBrandPage,
    },
    {
      path: routersAdmin.routers.brand.update,
      page: CatalogUpdateBrandPage,
    },
    {
      path: routersAdmin.routers.order.index,
      page: AdminOrderPage,
    },
    {
      path: routersAdmin.routers.order.detail,
      page: AdminOrderDetailPage,
    },
    {
      path: routersAdmin.routers.user.index,
      page: AdminUserPage,
    },
    // {
    //   path: routersAdmin.routers.user.add,
    //   page: CatalogAddUserPage,
    // },
    // {
    //   path: routersAdmin.routers.user.update,
    //   page: CatalogUpdateUserPage,
    // },
    {
      path: routersAdmin.routers.image.index,
      page: AdminImagePage,
    },
  ],
};
