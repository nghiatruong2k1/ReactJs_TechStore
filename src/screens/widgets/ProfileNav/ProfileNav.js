import { memo, Fragment, useMemo } from 'react';
import { ListNav } from '~/components';
import { privateRouters } from '~/routers/Private';
function FooterSocial(props) {
  const { datas, isLoading } = useMemo(function () {
    return {
      datas: [
        {
            text:"Tài khoản",
            icon:(<span className="fas fa-user-circle"/>),
            to:privateRouters.profile.index.getAction()
          },{
            text:"Đơn hàng",
            icon:(<span className="fas fa-store"/>),
            to:privateRouters.profile.orders.getAction()
          },{
            text:"Thông báo",
            icon:(<span className="fas fa-bell"/>),
            to:privateRouters.profile.message.getAction()
          },{
            text:"Tùy chọn",
            icon:(<span className="fas fa-cog"/>),
            to:privateRouters.profile.settings.getAction()
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
