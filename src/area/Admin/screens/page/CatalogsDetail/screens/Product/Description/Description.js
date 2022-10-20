import { memo } from 'react';
import { Grid, Stack, TextField } from '@mui/material';
import { AccorCard, InputEditter } from '~/components';
import { productModel } from '~/models/product';
import { useGetCatalogDetailContext } from '../../../provider';
function DescriptionComponent({ ...props }) {
  const {
    state: { values, valids },
    handle: { handleChangeValue },
    loading,
  } = useGetCatalogDetailContext();
  return (
    <>
      <AccorCard
        title={'Mô tả'}
        open={true}
        component={Grid}
        item
        {...props}
      >
        <Stack spacing={1}>
          <TextField
            size="small"
            autoComplete="off"
            value={values.ShortDes ?? ''}
            helperText={valids.ShortDes ?? ''}
            FormHelperTextProps={{
              error: Boolean(valids.ShortDes),
            }}
            disabled={loading}
            multiline={true}
            minRows={4}
            maxRows={6}
            onChange={(e) => {
              handleChangeValue('ShortDes', e.target.value);
            }}
            label={`${productModel.ShortDes.displayName}:`}
          />
          <InputEditter
            size="small"
            value={values.FullDes ?? ''}
            helperText={valids.FullDes ?? ''}
            error={valids.FullDes}
            disabled={loading}
            onChange={(e,v) => {
              handleChangeValue('FullDes', v);
            }}
            label={`${productModel.FullDes.displayName}:`}
          />
        </Stack>
      </AccorCard>
    </>
  );
}
export default memo(DescriptionComponent);
