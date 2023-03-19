import { memo, useMemo } from 'react';
import { BrowserRouter, Outlet, Route, Routes } from 'react-router-dom';
import { NewObject } from './config/NewObject';
import {
  BrandController,
  CartController,
  CategoryController,
  DefaultController,
  ProductController,
  ProfileController,
} from './controllers';
import { DefaultLayout, ProductsLayout, ProfileLayout } from './screens/layout';
import {
  BrandsPage,
  CartPage,
  CategorysPage,
  HomePage,
  NotfoundPage,
  ProductDetailPage,
  ProductsBrandPage,
  ProductsCategoryPage,
  ProductsSearchPage,
  ProfilePage,
} from './screens/page';
import CheckLoginPrivate from './private';
import { Routers } from './config/Routers';
import { adminRouters } from './area/Admin/router';

function RoutersComponent({ children }) {
  const routers = useMemo(() => {
    const rs = new NewObject();
    rs.public = new Routers(
      [
        [DefaultController.home, HomePage],
        [DefaultController.notfound, NotfoundPage, null],
        [ProductController.detail, ProductDetailPage],
        [ProductController.brand, ProductsBrandPage, ProductsLayout],
        [ProductController.category, ProductsCategoryPage, ProductsLayout],
        [ProductController.search, ProductsSearchPage, ProductsLayout],
        [CategoryController.index, CategorysPage],
        [BrandController.index, BrandsPage],
      ],
      { layout: DefaultLayout },
    );
    rs.private = new Routers(
      [
        [CartController.index, CartPage],
        [ProfileController.index, ProfilePage, ProfileLayout],
      ],
      { layout: DefaultLayout },
    );
    rs.admin = adminRouters;
    console.log('routes: ', rs);
    return rs;
  }, []);
  return (
    <BrowserRouter>
      {children}
      <Routes>
        {routers.public.map((route, indexRoute) => {
          return (
            <Route
              key={'public:' + indexRoute}
              path={route.path}
              element={route.element}
            />
          );
        })}
        <Route key={'Check Login Private'} element={<CheckLoginPrivate />}>
          {routers.private.map((route, indexRoute) => {
            return (
              <Route
                key={'private:' + indexRoute}
                path={route.path}
                element={route.element}
              />
            );
          })}
          {routers.admin instanceof Routers && (
            <Route
              key={routers.admin.title}
              path={routers.admin.path}
              element={<routers.admin.page />}
            >
              {routers.admin.map((route, indexRoute) => {
                return (
                  <Route
                    key={'admin:' + indexRoute}
                    path={route.path}
                    element={route.element}
                  />
                );
              })}
            </Route>
          )}
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
export default memo(RoutersComponent);
