import { memo, Fragment, useMemo } from 'react';
import { ListNav } from '~/components';
function FooterHelps(props) {
  const data = useMemo(function () {
    return [
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
    ];
  }, []);
  return (
    <Fragment>
      <ListNav
        icon={<span className="fas fa-chevron-right" />}
        datas={data}
        loading={false}
        title="Chính sách"
        {...props}
      />
    </Fragment>
  );
}
export default memo(FooterHelps);
