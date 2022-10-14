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
            to:getAction(routers.profile.index)
          },{
            text:"Đơn hàng",
            icon:(<span className="fas fa-store"/>),
            to:getAction(routers.profile.orders)
          },{
            text:"Thông báo",
            icon:(<span className="fas fa-bell"/>),
            to:getAction(routers.profile.message)
          },{
            text:"Tùy chọn",
            icon:(<span className="fas fa-cog"/>),
            to:getAction(routers.profile.settings)
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
