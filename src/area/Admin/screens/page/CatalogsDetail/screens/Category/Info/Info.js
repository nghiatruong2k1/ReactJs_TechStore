import { memo } from 'react';
import { Grid, Stack, TextField } from '@mui/material';
import { AccorCard } from '~/components';
import { categoryModel } from '~/models/category';
import { formatAlias } from '~/config/Format';
import { useGetCatalogDetailContext } from '../../../provider';
function InfoComponent({ ...props }) {
  const {
    state: { values, valids },
    handle: { handleChangeValue },
    loading
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
            label={`${categoryModel.Name.displayName}:`}
          />
          <TextField
            size="small"
            autoComplete="off"
            disabled={loading}
            value={values.Alias ?? ''}
            label={`${categoryModel.Alias.displayName}:`}
          />
        </Stack>
      </AccorCard>
    </>
  );
}
export default memo(InfoComponent);
