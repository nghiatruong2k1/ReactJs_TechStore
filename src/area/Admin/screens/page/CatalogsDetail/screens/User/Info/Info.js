import { memo } from 'react';
import { Grid, Stack, TextField } from '@mui/material';
import { AccorCard } from '~/components';
import { userModel } from '~/models/user';
import { formatAlias } from '~/config/Format';
import { useGetCatalogDetailContext } from '../../../provider';
function InfoComponent({ ...props }) {
  const {
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
            value={values.FirstName ?? ''}
            helperText={valids.FirstName ?? ''}
            FormHelperTextProps={{
              error: Boolean(valids.FirstName),
            }}            
            label={`${userModel.FirstName.displayName}:`}
          />
          <TextField
            size="small"
            autoComplete="off"
            value={values.LastName ?? ''}
            helperText={valids.LastName ?? ''}
            FormHelperTextProps={{
              error: Boolean(valids.LastName),
            }}
            label={`${userModel.LastName.displayName}:`}
          />{' '}
          <TextField
            size="small"
            autoComplete="off"
            value={values.Email ?? ''}
            helperText={valids.Email ?? ''}
            FormHelperTextProps={{
              error: Boolean(valids.Email),
            }}
            label={`${userModel.Email.displayName}:`}
          />
          <TextField
            size="small"
            autoComplete="off"
            value={values.Location ?? ''}
            helperText={valids.Location ?? ''}
            FormHelperTextProps={{
              error: Boolean(valids.Location),
            }}
            label={`${userModel.Location.displayName}:`}
          />
          <TextField
            size="small"
            autoComplete="off"
            value={values.Phone ?? ''}
            helperText={valids.Phone ?? ''}
            FormHelperTextProps={{
              error: Boolean(valids.Phone),
            }}
            label={`${userModel.Phone.displayName}:`}
          />
        </Stack>
      </AccorCard>
    </>
  );
}
export default memo(InfoComponent);
