import { memo } from 'react';
import { Switch, FormControlLabel, Grid, Stack } from '@mui/material';
import { AccorCard } from '~/components';
import { userModel } from '~/models/brand';
import { useGetCatalogDetailContext } from '../../../provider';
import InputRadios from '~/components/InputRadios';
import { userModel } from '../../../../../../../../models/user';
function OptionComponent({ ...props }) {
  const {
    datas:{types},
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
          <InputRadios
            label={`${userModel.TypeName.displayName}:`}
            value={values.TypeId || 0}
            onChange={(e, v) => {
              handleChangeValue('TypeId', Number(v));
            }}
            data={types}
            disabled={loading}
            loading={loading}
            variant='outlined'
          />
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
            label={userModel.IsPublic.displayName}
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
            label={userModel.IsTrash.displayName}
          />
        </Stack>
      </AccorCard>
    </>
  );
}
export default memo(OptionComponent);
