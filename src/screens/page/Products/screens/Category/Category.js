import { memo,  useCallback } from 'react';

import ViewLayout from '../../layout';
import { CategoryServices, ProductServices } from '~/services';
function CategoryComponent() {
  const categoryServices = CategoryServices('products category');
  const productServices = ProductServices('products category');
  const handleGetTitle = useCallback((alias, callback) => {
    return categoryServices.getByAlias(alias, callback);
  }, []);
  const handleGetTotal = useCallback((alias, callback) => {
    return productServices.getCountByCategory(alias, callback);
  }, []);
  const handleGetData = useCallback((alias, params, callback) => {
    return productServices.getsByCategory(alias, params, callback);
  }, []);
  return <ViewLayout {...{ handleGetTitle, handleGetData, handleGetTotal }} />;
}
export default memo(CategoryComponent);
