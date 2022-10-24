import { memo, Fragment, useState, useEffect } from 'react';
import { ListNav } from '~/components';
import BrandServices from '~/services/brand';
import { routers } from '~/config/Router';
function FooterBrands(props) {
  const brandServices = BrandServices('footer brands');
  const [isLoading, setLoading] = useState(false);
  const [data, setData] = useState(Array(5).fill(null));
  useEffect(() => {
    setLoading(true);
    const ourRequest = brandServices.getAll({}, (data) => {
      const newdata = data.map((item) => ({
        text: item.Name,
        to: routers.product.brand.getAction( { alias: item.Alias }),
      }));
      setData(newdata);
      setLoading(false);
    });
    return () => {
      ourRequest();
      setData(Array(5).fill(null));
    };
  }, []);
  return (
    <Fragment>
      <ListNav
        icon={<span className="fas fa-chevron-right" />}
        datas={data}
        loading={isLoading}
        title="Thương hiệu"
        {...props}
      />
    </Fragment>
  );
}
export default memo(FooterBrands);
