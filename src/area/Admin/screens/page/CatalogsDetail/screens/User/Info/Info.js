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
            value={values.Email ?? ''}
            helperText={valids.Email ?? ''}
            FormHelperTextProps={{
              error: Boolean(valids.Email),
            }}
            disabled={loading}
            onChange={(e) => {
              handleChangeValue('Email', e.target.value);
            }}
            label={`${userModel.Email.displayName}:`}
          />
          <TextField
            size="small"
            autoComplete="off"
            value={values.Password ?? ''}
            type="password"
            helperText={valids.Password ?? ''}
            FormHelperTextProps={{
              error: Boolean(valids.Password),
            }}
            disabled={loading}
            onChange={(e) => {
              handleChangeValue('Password', e.target.value);
            }}
            label={`${userModel.Password.displayName}:`}
          />
          <TextField
            size="small"
            autoComplete="off"
            value={values.Location ?? ''}
            helperText={valids.Location ?? ''}
            FormHelperTextProps={{
              error: Boolean(valids.Location),
            }}
            disabled={loading}
            onChange={(e) => {
              handleChangeValue('Location', e.target.value);
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
            disabled={loading}
            onChange={(e) => {
              handleChangeValue('Phone', e.target.value);
            }}
            label={`${userModel.Phone.displayName}:`}
          />
          <TextField
            size="small"
            autoComplete="off"
            value={values.FirstName ?? ''}
            helperText={valids.FirstName ?? ''}
            FormHelperTextProps={{
              error: Boolean(valids.FirstName),
            }}
            disabled={loading}
            onChange={(e) => {
              handleChangeValue('FirstName', e.target.value);
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
            disabled={loading}
            onChange={(e) => {
              handleChangeValue('LastName', e.target.value);
            }}
            label={`${userModel.LastName.displayName}:`}
          />
        </Stack>
      </AccorCard>
    </>
  );
}
export default memo(InfoComponent);
