import { memo, useReducer, useCallback } from 'react';

import ViewLayout from '../../layout';
import { CategoryServices, ProductServices } from '~/services';
import { useGetTitle } from '~/hooks/Title';
function CategoryComponent(props) {
  const categoryServices = CategoryServices('products category');
  const productServices = ProductServices('products category');
  const handleTitle = useGetTitle();
  const handleGetTitle = useCallback((alias,callback) => {
    return categoryServices.getByAlias(alias, callback);
  }, []);
  const handleGetTotal = useCallback((alias, callback) => {
    return productServices.getCountByCategory(alias, callback);
  }, []);
  const handleGetData = useCallback((alias, params, callback) => {
    return productServices.getsByCategory(alias, params, callback);
  }, []);
  return (
    <ViewLayout
      {...{ handleGetTitle, handleGetData, handleGetTotal }}
    />
  );
}
export default memo(CategoryComponent);
