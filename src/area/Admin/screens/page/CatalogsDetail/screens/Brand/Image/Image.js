import { memo } from 'react';
import { Grid, Stack } from '@mui/material';
import { AccorCard } from '~/components';
import InputFile from '~/components/InputFile';
import { useGetCatalogDetailContext } from '../../../provider';
function ImageComponent({ ...props }) {
  const {
    state: { values, valids },
    handle: { handleChangeValue },
    loading
  } = useGetCatalogDetailContext();
  return (
    <>
      <AccorCard
        title={'Hình ảnh'}
        open={true}
        component={Grid}
        item
        {...props}
      >
        <Stack>
          <InputFile disabled={loading}/>
        </Stack>
      </AccorCard>
    </>
  );
}
export default memo(ImageComponent);
