import { memo, Fragment, useMemo } from 'react';
import { ListNav } from '~/components';
// import { routers, getAction } from '~/config/Router';
function FooterHelps(props) {
  const { datas, isLoading } = useMemo(function () {
    return {
      datas: [
        {
          text: 'Chính sách bảo mật',
          //to: getAction(routers.about.a),
        },
        {
          text: 'Chính sách thanh toán',
          //to: getAction(routers.about.a),
        },
        {
          text: 'Chính sách giao hàng',
          //to: getAction(routers.about.a),
        },
        {
          text: 'Chính sách khuyến mãi',
          //to: getAction(routers.about.a),
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
