import { memo, Fragment, useState, useEffect } from 'react';
import { ListNav } from '~/components';
import CategoryServices from '~/services/category';
import { publicRouters} from '~/routers/Public';
function FooterCategories(props) {
  const categoryServices = CategoryServices('footer categories');
  const [isLoading, setLoading] = useState(false);
  const [data, setData] = useState(Array(5).fill(null));
  useEffect(() => {
    setLoading(true);
    const ourRequest = categoryServices.getAll({}, (data) => {
      const newdata = data.map((item) => ({
        text: item.Name,
        to: publicRouters.product.category.getAction({ alias: item.Alias }),
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
        title="Danh mục"
        {...props}
      />
    </Fragment>
  );
}
export default memo(FooterCategories);
