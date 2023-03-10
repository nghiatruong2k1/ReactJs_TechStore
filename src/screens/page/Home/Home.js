import { memo ,useEffect} from 'react';
import RecommendProduct from './screens/RecommendProduct';
import DealsOffersProduct from './screens/DealsOffersProduct';
import Brands from './screens/Brands';
import AsideTop from './screens/AsideTop';
import { Stack } from '@mui/material';
import { useHandleTitle } from '~/hooks/Title';
function HomePageComponent({title}) {
  const handleTitle = useHandleTitle();
  useEffect(() => {
    return handleTitle(title);
  }, []);
  return (
    <Stack spacing={2} py={2}>
      <AsideTop />
      <Brands />
      <DealsOffersProduct />
      <RecommendProduct />
    </Stack>
  );
}
export default memo(HomePageComponent);
