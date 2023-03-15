import { memo, Fragment, useMemo, useEffect } from 'react';
import { Outlet, Route, Routes } from 'react-router-dom';
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
const Element = memo(({ title, page, layout }) => {
  const Layout = layout === null ? Fragment : layout ?? DefaultLayout;
  const Page = page ?? 'div';
  return (
    <Fragment>
      <Layout>
        <Page title={title} />
      </Layout>
    </Fragment>
  );
});

function RoutersComponent(props) {
  const routers = useMemo(() => {
    function route(props, page, layout) {
      return {
        path: props.path,
        element: <Element title={props.title} page={page} layout={layout} />,
      };
    }
    const rs = {};
    rs.public = [
      route(DefaultController.home, HomePage),
      route(DefaultController.notfound, NotfoundPage, null),
      route(ProductController.brand, ProductsBrandPage, ProductsLayout),
      route(ProductController.category, ProductsCategoryPage, ProductsLayout),
      route(ProductController.search, ProductsSearchPage, ProductsLayout),
      route(ProductController.detail, ProductDetailPage),
      route(BrandController.index, BrandsPage),
      route(CategoryController.index, CategorysPage),
    ];
    rs.private = [
      route(CartController.index, CartPage),
      route(ProfileController.index, ProfilePage, ProfileLayout),
    ];
    return rs;
  }, []);
  return (
    <Routes>
      {routers.public.map((route, index) => {
        return (
          <Route
            key={'public:' + index}
            path={route.path}
            element={route.element}
          />
        );
      })}
      <Route key={'checkLogin'} element={<CheckLoginPrivate />}>
        {routers.private.map((route, index) => {
          return (
            <Route
              key={'private:' + index}
              path={route.path}
              element={route.element}
            />
          );
        })}
      </Route>
    </Routes>
  );
}
export default memo(RoutersComponent);
