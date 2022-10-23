import { memo, Fragment, useEffect } from 'react';
import { Route, Routes, useLocation } from 'react-router-dom';
import { publicRouters } from '~/routers/Public';
import { privateRouters } from '~/routers/Private';
import { adminRouters } from '~/area/Admin/router';
import { DefaultLayout } from '~/screens/layout';
const renderRoute = ({ layout, path, page }, id, defaultLayout) => {
  const Layout =
    layout === null ? Fragment : layout ?? defaultLayout ?? DefaultLayout;
  const Page = page ?? Fragment;
  return (
    <Route
      key={`${id}-route`}
      path={`${path}`}
      element={
        <>
          <Layout>
             <Page />     
          </Layout>
        </>
      }
    />
  );
};
const bodyRoot = document.getElementById('root');
function App() {
  const location = useLocation();
  useEffect(() => {
    bodyRoot.scrollTop = 0;
  }, [location]);
  useEffect(() => {
    console.log(process.env);
  }, []);
  return (
    <>
      <Routes>
        {publicRouters.map(({ layout, path, page }, index) => {
          return renderRoute(
            { layout, path:`/${path}`, page },
            `public-${index}`,
          );
        })}
        <Route element={<privateRouters.element />}>
          {privateRouters.routes.map(({ layout, path, page }, index) => {
            return renderRoute(
              { layout, path: `/${path}`, page },
              `private-${index}`,
            );
          })}
          <Route
            path={'/' + adminRouters.path}
            element={<adminRouters.element />}
          >
            {adminRouters.routes.map(({ layout, path, page }, index) => {
              return renderRoute(
                { layout, path, page },
                `admin-${index}`,
                adminRouters.defaultLayout,
              );
            })}
          </Route>
        </Route>
      </Routes>
    </>
  );
}

export default memo(App);
