import { memo } from 'react';
import ViewLayout from '../../layout';
import { BrandServices, ProductServices } from '~/services';
function BrandComponent() {
  const brandServices = BrandServices('products Brand');
  const productServices = ProductServices('products Brand');
  return (
    <ViewLayout
      handleGetTitle={brandServices.getByAlias}
      handleGetData={productServices.getsByBrand}
      handleGetTotal={productServices.getCountByBrand}
    />
  );
}
export default memo(BrandComponent);
