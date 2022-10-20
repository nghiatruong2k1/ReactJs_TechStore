import { memo } from 'react';
import { Grid, Stack, TextField } from '@mui/material';
import { AccorCard, InputSelect } from '~/components';
import { productModel } from '~/models/product';
import { formatAlias } from '~/config/Format';
import { useGetCatalogDetailContext } from '../../../provider';
function InfoComponent({ ...props }) {
  const {
    datas:{categories,brands},
    state: { values, valids },
    handle: { handleChangeValue },
    loading,
  } = useGetCatalogDetailContext();
  return (
    <>
      <AccorCard
        title={'Thông tin'}
        open={true}
        component={Grid}
        item
        {...props}
      >
        <Stack spacing={1}>
          <TextField
            size="small"
            autoComplete="off"
            value={values.Name ?? ''}
            helperText={valids.Name ?? ''}
            FormHelperTextProps={{
              error: Boolean(valids.Name),
            }}
            disabled={loading}
            onChange={(e) => {
              handleChangeValue('Name', e.target.value);
              handleChangeValue('Alias', formatAlias(e.target.value));
            }}
            label={`${productModel.Name.displayName}:`}
          />
          <TextField
            size="small"
            autoComplete="off"
            disabled={loading}
            value={values.Alias ?? ''}
            label={`${productModel.Alias.displayName}:`}
          />
          <InputSelect
            initValue={0}
            value={values.CategoryId}
            label={`${productModel.CategoryName.displayName}:`}
            placeholder={productModel.CategoryName.displayName}
            helperText={valids.CategoryId ?? ''}
            error={valids.CategoryId}
            disabled={loading}
            size="small"
            data={categories}
            onChange={(v) => {
              handleChangeValue('CategoryId', v);
            }}
          />
          <InputSelect
            initValue={0}
            value={values.BrandId}
            label={`${productModel.BrandName.displayName}:`}
            placeholder={productModel.BrandName.displayName}
            helperText={valids.BrandId ?? ''}
            error={valids.BrandId}
            disabled={loading}
            size="small"
            data={brands}
            onChange={(v) => {
              handleChangeValue('BrandId', v);
            }}
          />
        </Stack>
      </AccorCard>
    </>
  );
}
export default memo(InfoComponent);
