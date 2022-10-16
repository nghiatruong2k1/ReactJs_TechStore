import { memo } from 'react';

import ViewLayout from '../../layout';
import { CategoryServices, ProductServices } from '~/services';
function CategoryComponent() {
  const categoryServices = CategoryServices('products category');
  const productServices = ProductServices('products category');
  return (
    <ViewLayout
      handleGetTitle={categoryServices.getByAlias}
      handleGetData={productServices.getsByCategory}
      handleGetTotal={productServices.getCountByCategory}
    />
  );
}
export default memo(CategoryComponent);
