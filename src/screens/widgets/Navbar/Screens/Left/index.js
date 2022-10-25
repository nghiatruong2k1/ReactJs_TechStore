import { memo, useMemo } from 'react';
import { routers } from '~/config/Router';
import NavMenu from '../../components/NavMenu';
function LeftNav(props) {
  const datas = useMemo(function () {
    return [
      {
        to: '/',
        text: 'Trang chủ',
      },
      {
        to: routers.category.index.getAction(),
        text: 'Danh mục',
      },
      {
        to: routers.brand.index.getAction(),
        text: 'Thương hiệu',
      },
      {
        to: routers.services?.index?.getAction(),
        text: 'Dịch vụ',
      },
      {
        to: routers.post?.index?.getAction(),
        text: 'Tin tức',
      },
    ];
  }, []);
  return <NavMenu {...props} datas={datas} />;
}
export default memo(LeftNav);
