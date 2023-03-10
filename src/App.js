import { Fragment, memo, useEffect } from 'react';
import { Outlet, Route, Routes, useLocation } from 'react-router-dom';
import { ActionConfig, ControllerConfig, RouterConfig } from '~/config/Router';
import Loading from '~/screens/Loading';
import { routers} from '~/routers';
import { useHandleTitle } from '~/hooks/Title';

const Element = memo(({ title, page, layout }) => {
  const Layout = layout ?? Fragment;
  const Page = page ?? Fragment;
  const handleTitle = useHandleTitle();
  useEffect(() => {
    return handleTitle(title);
  }, []);
  return (
    <Fragment>
      <Layout>
        <Page title={title} />
      </Layout>
    </Fragment>
  );
});

const bodyRoot = document.getElementById('root');
function App() {
  const location = useLocation();
  useEffect(() => {
    bodyRoot.scrollTop = 0;
  }, [location]);
  useEffect(() => {
    console.log([routers, process.env]);
  }, []);
  return (
    <>
      <Loading />
      <Routes>
        {routers.map((route, key) => {
          if (route instanceof RouterConfig) {
            const Page = route.checkpage ?? Outlet;
            return (
              <Route key={key} path={route.path} element={<Page />}>
                {route.map((item, keyitem) => {
                  if (item instanceof ActionConfig) {
                    return (
                      <Route
                        key={keyitem}
                        path={item.valueOf()}
                        element={
                          <Element
                            title={item.title}
                            layout={item.getLayout()}
                            page={item.page}
                          />
                        }
                      />
                    );
                  } else if (item instanceof ControllerConfig) {
                    const Page = item.checkpage ?? Outlet;
                    return (
                      <Route key={keyitem} path={item.path} element={<Page />}>
                        {item.map((action, keyaction) => {
                          return (
                            <Route
                              key={keyaction}
                              path={action.valueOf()}
                              element={
                                <Element
                                  title={action.title}
                                  layout={action.getLayout()}
                                  page={action.page}
                                />
                              }
                            />
                          );
                        })}
                      </Route>
                    );
                  }
                })}
              </Route>
            );
          }
        })}
      </Routes>
    </>
  );
}

export default memo(App);
