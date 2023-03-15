import { memo, useMemo } from 'react';
import { BrandController, CategoryController, DefaultController } from '~/controllers';
import NavMenu from '../../components/NavMenu';
function LeftNav(props) {
  const datas = useMemo(function () {
    return [
      {
        to: DefaultController.home.getAction(),
        text: 'Trang chủ',
      },
      {
        to: CategoryController.index.getAction(),
        text: 'Danh mục',
      },
      {
        to:BrandController.index.getAction(),
        text: 'Thương hiệu',
      },
      {
        //to: ServiceController?.index.getAction(),
        text: 'Dịch vụ',
      },
      {
        //to: PostController?.index.getAction(),
        text: 'Tin tức',
      },
    ];
  }, []);
  return <NavMenu {...props} datas={datas} />;
}
export default memo(LeftNav);
