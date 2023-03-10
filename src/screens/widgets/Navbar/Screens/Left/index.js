import { memo, useMemo } from 'react';
import { publicRouters} from '~/routers/Public';
import NavMenu from '../../components/NavMenu';
function LeftNav(props) {
  const datas = useMemo(function () {
    return [
      {
        to: '/',
        text: 'Trang chủ',
      },
      {
        to: publicRouters.category.index.getAction(),
        text: 'Danh mục',
      },
      {
        to: publicRouters.brand.index.getAction(),
        text: 'Thương hiệu',
      },
      {
        to: publicRouters.services?.index?.getAction(),
        text: 'Dịch vụ',
      },
      {
        to: publicRouters.post?.index?.getAction(),
        text: 'Tin tức',
      },
    ];
  }, []);
  return <NavMenu {...props} datas={datas} />;
}
export default memo(LeftNav);
