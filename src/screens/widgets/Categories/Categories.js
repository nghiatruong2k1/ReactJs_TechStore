import { memo, Fragment, useState, useEffect } from 'react';
import { ListNav } from '~/components';
import { ProductController } from '~/controllers';
import { useInitLoading } from '~/hooks/Loading';
import CategoryServices from '~/services/category';
function FooterCategories(props) {
  const categoryServices = CategoryServices('footer categories');
  const [loading, handleLoading] = useInitLoading();
  const [data, setData] = useState(Array(5).fill(null));
  useEffect(() => {
    const ourLoading = handleLoading();
    const ourRequest = categoryServices.getAll({}, (data) => {
      const newdata = data.map((item) => ({
        text: item.Name,
        to: ProductController.category.getAction({ alias: item.Alias }),
      }));
      setData(newdata);
      ourLoading();
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
        loading={loading}
        title="Danh mục"
        {...props}
      />
    </Fragment>
  );
}
export default memo(FooterCategories);
