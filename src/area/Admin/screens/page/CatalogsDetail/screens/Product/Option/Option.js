import { memo } from 'react';
import { Switch, FormControlLabel, Grid, Stack } from '@mui/material';
import { AccorCard } from '~/components';
import { productModel } from '~/models/product';
import { useGetCatalogDetailContext } from '../../../provider';
function OptionComponent({ ...props }) {
  const {
    state: { values, valids },
    handle: { handleChangeValue },
    loading
  } = useGetCatalogDetailContext();
  return (
    <>
      <AccorCard
        title={'Tùy chọn'}
        open={true}
        component={Grid}
        item
        {...props}
      >
        <Stack>
          <FormControlLabel
            onChange={(e, c) => {
              handleChangeValue('IsPublic', c);
            }}
            disabled={loading}
            control={
              <Switch
                color={valids.IsPublic ? 'error' : 'primary'}
                checked={values.IsPublic ?? false}
              />
            }
            label={productModel.IsPublic.displayName}
          />
          <FormControlLabel
            onChange={(e, c) => {
              handleChangeValue('IsTrash', c);
            }}
            disabled={loading}
            control={
              <Switch
                color={valids.IsTrash ? 'error' : 'primary'}
                checked={values.IsTrash ?? false}
              />
            }
            label={productModel.IsTrash.displayName}
          />
        </Stack>
      </AccorCard>
    </>
  );
}
export default memo(OptionComponent);
