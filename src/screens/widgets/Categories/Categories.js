import { memo, Fragment, useState, useEffect } from 'react';
import { ListNav } from '~/components';
import CategoryServices from '~/services/category';
import { routers, getAction } from '~/config/Router';
function FooterCategories(props) {
  const categoryServices = CategoryServices('footer categories');
  const [isLoading, setLoading] = useState(false);
  const [data, setData] = useState([]);
  useEffect(() => {
    setData(Array(5).fill(null));
    setLoading(true);
    const ourRequest = categoryServices.getAll({}, (data) => {
      const newdata = data.map((item) => ({
        text: item.Name,
        to: routers.product.category.getAction({ alias: item.Alias }),
      }));
      setData(newdata);
      setLoading(false);
    });
    return ourRequest;
  }, []);
  return (
    <Fragment>
      <ListNav
        icon={<span className="fas fa-chevron-right" />}
        datas={data}
        loading={isLoading}
        title="Danh mục"
        {...props}
      />
    </Fragment>
  );
}
export default memo(FooterCategories);
