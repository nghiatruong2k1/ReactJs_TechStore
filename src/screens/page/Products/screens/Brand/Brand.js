import { memo, useCallback } from 'react';
import ViewLayout from '../../layout';
import { BrandServices, ProductServices } from '~/services';
function BrandComponent() {
  const brandServices = BrandServices('products Brand');
  const productServices = ProductServices('products Brand');
  const handleGetTitle = useCallback((alias,callback) => {
    return brandServices.getByAlias(alias, callback);
  }, []);
  const handleGetTotal = useCallback((alias, callback) => {
    return productServices.getCountByBrand(alias, callback);
  }, []);
  const handleGetData = useCallback((alias, params, callback) => {
    return productServices.getsByBrand(alias, params, callback);
  }, []);
  return <ViewLayout {...{ handleGetTitle, handleGetData, handleGetTotal }} />;
}
export default memo(BrandComponent);
