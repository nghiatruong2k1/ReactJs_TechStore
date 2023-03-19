import { Fragment, memo } from 'react';
import { Outlet } from 'react-router-dom';
import { NewArray } from './NewArray';
const Element = memo(({ title, page, layout, defaultLayout }) => {
  const Layout =
    layout === null ? Fragment : layout ?? defaultLayout ?? Fragment;
  const Page = page ?? 'div';
  return (
    <Fragment>
      <Layout>
        <Page title={title} />
      </Layout>
    </Fragment>
  );
});
export class Routers extends NewArray {
  constructor(routes, privates = {}) {
    const { title, path, page, layout } = privates;
    let newRouters;
    if (Array.isArray(routes)) {
      newRouters = routes.map(([_action, _page, _layout]) => {
        return {
          path: _action.getPath(),
          element: (
            <Element
              page={_page}
              layout={_layout}
              defaultLayout={layout}
              title={_action.title}
            />
          ),
        };
      });
    }
    super(newRouters, {
      title,
      path,
      page: page ?? Outlet,
      layout,
    });
  }
}
