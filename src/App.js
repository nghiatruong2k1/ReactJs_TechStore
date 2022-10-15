import { memo, Fragment, useEffect } from 'react';
import { Route, Routes, useLocation } from 'react-router-dom';
import { publicRouters } from '~/routers/Public';
import { privateRouters } from '~/routers/Private';
import { DefaultLayout } from '~/screens/layout';
const bodyRoot = document.getElementById('root');
const renderRoute = ({ layout, path, page, title }, id) => {
  const Layout = layout === null ? Fragment : layout ?? DefaultLayout;
  const Page = page ?? Fragment;
  return (
    <Route
      key={`${id}-route`}
      path={path.split('?')[0]}
      element={
        <Layout>
          <Page />
        </Layout>
      }
    />
  );
};
function App() {
  const location = useLocation();
  useEffect(() => {
    bodyRoot.scrollTop = 0;
  }, [location]);

  return (
    <>
      <Routes>
        {publicRouters.map(({ layout, path, page, title }, index) => {
          return renderRoute({ layout, path, page, title }, `public-${index}`);
        })}
        <Route element={<privateRouters.element />}>
          {privateRouters.routers.map(
            ({ layout, path, page, title }, index) => {
              return renderRoute(
                { layout, path, page, title },
                `private-${index}`,
              );
            },
          )}
        </Route>
      </Routes>
    </>
  );
}

export default memo(App);
