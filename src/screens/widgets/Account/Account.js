import { memo, Fragment, useMemo } from 'react';
import { ListNav } from '~/components';
function FooterAccount(props) {
  const data = useMemo(function () {
    return [
      {
        icon: <span className="fas fa-user" />,
        text: 'Trực tuyến: 0',
      },
      {
        icon: <span className="fas fa-user" />,
        text: 'Khách hàng: 0',
      },
    ];
  }, []);
  return (
    <Fragment>
      <ListNav datas={data} loading={false} title="Người dùng" {...props} />
    </Fragment>
  );
}
export default memo(FooterAccount);
