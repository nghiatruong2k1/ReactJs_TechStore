import { memo, Fragment, useState, useEffect } from 'react';
import { ListNav } from '~/components';
import { ProductController } from '~/controllers';
// import { ProductController } from '~/controllers';
import { useInitLoading } from '~/hooks/Loading';
import BrandServices from '~/services/brand';
function FooterBrands(props) {
  const brandServices = BrandServices('footer brands');
  const [loading, handleLoading] = useInitLoading();
  const [data, setData] = useState(Array(5).fill(null));
  useEffect(() => {
    const ourLoading = handleLoading();
    const ourRequest = brandServices.getAll({}, (data) => {
      const newdata = data.map((item) => ({
        text: item.Name,
        to: ProductController.brand.getAction({ alias: item.Alias }),
      }));
      setData(newdata);
      console.log(ProductController,data)
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
        title="Thương hiệu"
        {...props}
      />
    </Fragment>
  );
}
export default memo(FooterBrands);
