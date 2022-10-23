import { memo } from 'react';
import { Switch, FormControlLabel, Grid, Stack } from '@mui/material';
import { AccorCard } from '~/components';
import { orderModel } from '~/models/order';
import { useGetCatalogDetailContext } from '../../../provider';
import InputRadios from '~/components/InputRadios';
function OptionComponent({ ...props }) {
  const {
    datas: { status },
    state: { values, valids },
    handle: { handleChangeValue },
    loading,
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
            label={`${orderModel.StatusName.displayName}:`}
            value={values.StatusId || 0}
            onChange={(e, v) => {
              handleChangeValue('StatusId', Number(v));
            }}
            data={status}
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
            label={orderModel.IsPublic.displayName}
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
            label={orderModel.IsTrash.displayName}
          />
        </Stack>
      </AccorCard>
    </>
  );
}
export default memo(OptionComponent);
