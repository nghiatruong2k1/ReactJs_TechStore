import { routers,routersAdmin } from '~/config/Router';
import {
  CartPage,
  ProfilePage,
  OrdersPage,
} from '~/screens/page';
import {  ProfileLayout } from '~/screens/layout';
import CheckLoginPrivate from '~/private';
export const privateRouters = {
  element: CheckLoginPrivate,
  routes: [
    {
      path: routers.profile.index,
      page: ProfilePage,
      layout: ProfileLayout,
    },
    {
      path: routers.profile.cart,
      page: CartPage,
    },
    {
      path: routers.profile.message,
      layout: ProfileLayout,
    },
    {
      path: routers.profile.orders,
      page: OrdersPage,
      layout: ProfileLayout,
    },
    {
      path: routers.profile.settings,
      layout: ProfileLayout,
    }
  ],
};
