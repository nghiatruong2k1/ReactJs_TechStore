import { memo, useEffect, Fragment, useState } from 'react';
import { ListNav } from '~/components';
import BrandServices from '~/services/brand';
import { routers, getAction } from '~/config/Router';
function FooterBrands(props) {
  const [data, setData] = useState([]);
  const [isLoading, setLoading] = useState(false);
  const brandServices = BrandServices('footer brands');
  useEffect(() => {
    setData(Array(5).fill(null));
    setLoading(true);
    const ourRequest = brandServices.getAll({}, (data) => {
      const newdata = data.map((item) => ({
        text: item.Name,
        to: getAction(routers.product.brand, { alias: item.Alias }),
        icon: <span className="fas fa-chevron-right" />,
      }));
      setData(newdata);
      setLoading(false);
    });
    return ourRequest;
  }, []);
  return (
    <Fragment>
      <ListNav
        datas={data}
        loading={isLoading}
        title="Thương hiệu"
        {...props}
      />
    </Fragment>
  );
}
export default memo(FooterBrands);
