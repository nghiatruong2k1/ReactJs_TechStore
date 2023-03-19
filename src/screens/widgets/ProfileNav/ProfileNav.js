import { memo, Fragment, useMemo } from 'react';
import { ListNav } from '~/components';
import { ProfileController } from '~/controllers';
function FooterSocial(props) {
  const datas = useMemo(function () {
    return [
      {
        text: 'Tài khoản',
        icon: <span className="fas fa-user-circle" />,
        to: ProfileController.index.getAction(),
      },
      {
        text: 'Đơn hàng',
        icon: <span className="fas fa-store" />,
        to: ProfileController.orders.getAction(),
      },
      {
        text: 'Thông báo',
        icon: <span className="fas fa-bell" />,
        to: ProfileController.message.getAction(),
      },
      {
        text: 'Tùy chọn',
        icon: <span className="fas fa-cog" />,
        to: ProfileController.settings.getAction(),
      },
    ];
  }, []);
  return (
    <Fragment>
      <ListNav datas={datas} loading={false} {...props} />
    </Fragment>
  );
}
export default memo(FooterSocial);
