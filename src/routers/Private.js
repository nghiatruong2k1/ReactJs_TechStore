import { routers } from '~/config/Router';
import {
  CartPage,
  ProfilePage,
  OrdersPage,
} from '~/screens/page';
import {  ProfileLayout } from '~/screens/layout';
import CheckLoginPrivate from '~/private';
export const privateRouters = {
  element: CheckLoginPrivate,
  routers: [
    {
      path: routers.profile.index,
      title: '',
      page: ProfilePage,
      layout: ProfileLayout,
    },
    {
      path: routers.profile.cart,
      title: '',
      page: CartPage,
    },
    {
      path: routers.profile.message,
      title: '',
      layout: ProfileLayout,
    },
    {
      path: routers.profile.orders,
      title: '',
      page: OrdersPage,
      layout: ProfileLayout,
    },
    {
      path: routers.profile.settings,
      title: '',
      layout: ProfileLayout,
    },
  ],
};
