import { memo, Fragment, useMemo } from 'react';
import { ListNav } from '~/components';
import {routers, getAction } from '~/config/Router';
function FooterSocial(props) {
  const { datas, isLoading } = useMemo(function () {
    return {
      datas: [
        {
            text:"Tài khoản",
            icon:(<span className="fas fa-user-circle"/>),
            to:routers.profile.index.getAction()
          },{
            text:"Đơn hàng",
            icon:(<span className="fas fa-store"/>),
            to:routers.profile.orders.getAction()
          },{
            text:"Thông báo",
            icon:(<span className="fas fa-bell"/>),
            to:routers.profile.message.getAction()
          },{
            text:"Tùy chọn",
            icon:(<span className="fas fa-cog"/>),
            to:routers.profile.settings.getAction()
          }
      ],
      isLoading: false,
    };
  }, []);
  return (
    <Fragment>
      <ListNav datas={datas} loading={isLoading} {...props} />
    </Fragment>
  );
}
export default memo(FooterSocial);
