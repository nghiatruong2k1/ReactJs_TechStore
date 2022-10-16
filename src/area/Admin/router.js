import { routersAdmin } from '~/config/Router';
import { AdminDashboardPage, AdminProductPage } from '~/area/Admin/screens/page';
import { AdminDefaultLayout } from '~/area/Admin/screens/layout';
import { CheckAdminPrivate } from '~/area/Admin/private';
export const adminRouters = {
  defaultLayout:AdminDefaultLayout,
  path:routersAdmin.area,
  element:CheckAdminPrivate,
  routes:[
    {
      path: routersAdmin.routers.dashboard,
      page: AdminDashboardPage,
    },{
      path:routersAdmin.routers.product.index,
      page:AdminProductPage
    }
  ]
};
