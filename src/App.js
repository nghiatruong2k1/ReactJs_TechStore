import { memo, Fragment, useEffect } from 'react';
import { Route, Routes, useLocation } from 'react-router-dom';
import { publicRouters } from '~/routers/Public';
import { DefaultLayout } from '~/screens/layout';
import Loading from '~/screens/Loading';
const bodyRoot = document.getElementById('root');
function App() {
  const location = useLocation();
  useEffect(() => {
    bodyRoot.scrollTop = 0;
  }, [location]);
  return (
    <>
      <Loading />
        <Routes>
          {publicRouters.map(({ layout, path, page, title }, index) => {
            const Layout = layout === null ? Fragment : layout ?? DefaultLayout;
            const Page = page ?? Fragment;
            return (
              <Route
                key={index}
                path={path.split('?')[0]}
                element={
                  <Layout>
                    <Page />
                  </Layout>
                }
              />
            );
          })}
        </Routes>
    </>
  );
}
export default memo(App);
