import { memo, useMemo } from 'react';
import { routers, getAction } from '~/config/Router';
import NavMenu from '../../components/NavMenu';
function LeftNav(props) {
  const datas = useMemo(function () {
    return [
      {
        to: '/',
        text: 'Trang chủ',
      },
      {
        to: getAction(routers.category?.index),
        text: 'Danh mục',
      },
      {
        to: getAction(routers.brand?.index),
        text: 'Thương hiệu',
      },
      {
        to: getAction(routers.services?.index),
        text: 'Dịch vụ',
      },
      {
        to: getAction(routers.post?.index),
        text: 'Tin tức',
      },
    ];
  }, []);
  return <NavMenu {...props} datas={datas} />;
}
export default memo(LeftNav);
