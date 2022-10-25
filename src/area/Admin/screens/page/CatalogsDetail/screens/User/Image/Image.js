import { memo } from 'react';
import { Grid, Stack } from '@mui/material';
import { AccorCard } from '~/components';
import InputFile from '~/components/InputFile';
import { useGetCatalogDetailContext } from '../../../provider';
import { userModel } from '~/models/user';
function ImageComponent({ ...props }) {
  const {
    state: { values, valids },
    handle: { handleChangeValue },
    loading,
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
          <InputFile
            src={values.ImageUrl}
            value={values.ImageId}
            onChange={(data) => {
              handleChangeValue('ImageId', data.Id);
              handleChangeValue('ImageUrl', data.Url);
            }}
            alt={userModel.ImageUrl.displayName}
            disabled={loading}
          />
        </Stack>
      </AccorCard>
    </>
  );
}
export default memo(ImageComponent);
