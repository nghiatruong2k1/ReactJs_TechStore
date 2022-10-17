import { memo, useCallback } from 'react';
import OrderAdminServices from '~/area/Admin/services/orderAdmin';
import CardStatistic from '../../components/CardStatistic';
function OrdersStatisComponent(props) {
  const services = OrderAdminServices('OrdersStatisComponent');
  return (
    <CardStatistic
      title="Đơn hàng"
      icon={<span className="fas fa-shopping-cart" />}
      handleGetData={services.getCount}
      {...props}
    />
  );
}
export default memo(OrdersStatisComponent);
