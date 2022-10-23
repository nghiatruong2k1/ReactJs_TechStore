import { memo, Fragment, useMemo } from 'react';
import { ListNav } from '~/components';
// import { routers } from '~/config/Router';
function FooterHelps(props) {
  const { datas, isLoading } = useMemo(function () {
    return {
      datas: [
        {
          text: 'Chính sách bảo mật',
          
        },
        {
          text: 'Chính sách thanh toán',
          
        },
        {
          text: 'Chính sách giao hàng',
        },
        {
          text: 'Chính sách khuyến mãi',
          
        },
      ],
      isLoading: false,
    };
  }, []);
  return (
    <Fragment>
      <ListNav
        icon={<span className="fas fa-chevron-right" />}
        datas={datas}
        loading={isLoading}
        title="Chính sách"
        {...props}
      />
    </Fragment>
  );
}
export default memo(FooterHelps);
