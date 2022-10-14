import { memo, Fragment, useEffect } from 'react';
import { Route, Routes, useLocation } from 'react-router-dom';
import { publicRouters } from '~/routers/Public';
import { relativeRouters } from '~/routers/Private';
import { DefaultLayout } from '~/screens/layout';

const bodyRoot = document.getElementById('root');

function App() {
  const location = useLocation();
  useEffect(() => {
    bodyRoot.scrollTop = 0;
  }, [location]);
  return (
    <>
      <Routes>
        {publicRouters.map(({ layout, path, page, title }, index) => {
          const Layout = layout === null ? Fragment : layout ?? DefaultLayout;
          const Page = page ?? Fragment;
          return (
            <Route
              key={`public-route-${index}`}
              path={path.split('?')[0]}
              element={
                <Layout>
                  <Page />
                </Layout>
              }
            />
          );
        })}
        <Route element={<relativeRouters.element />}>
          {relativeRouters.routers.map(
            ({ layout, path, page, title }, index) => {
              const Layout =
                layout === null ? Fragment : layout ?? DefaultLayout;
              const Page = page ?? Fragment;
              return (
                <Route
                  key={`prelative-route-${index}`}
                  path={path.split('?')[0]}
                  element={
                    <Layout>
                      <Page />
                    </Layout>
                  }
                />
              );
            },
          )}
        </Route>
      </Routes>
    </>
  );
}
export default memo(App);
