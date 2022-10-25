import { memo } from 'react';
import { Grid, Stack, TextField } from '@mui/material';
import { AccorCard } from '~/components';
import { orderModel } from '~/models/order';
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
            value={values.Id ?? ''}
            helperText={valids.Id ?? ''}
            FormHelperTextProps={{
              error: Boolean(valids.Id),
            }}
            label={`${orderModel.Id.displayName}:`}
          />
          <TextField
            size="small"
            autoComplete="off"
            value={values.VoucherSale ?? ''}
            helperText={valids.VoucherSale ?? ''}
            FormHelperTextProps={{
              error: Boolean(valids.VoucherSale),
            }}
            
            label={`${orderModel.VoucherSale.displayName}:`}
          />
          <TextField
            size="small"
            autoComplete="off"
            value={values.TotalPrice ?? ''}
            helperText={valids.TotalPrice ?? ''}
            FormHelperTextProps={{
              error: Boolean(valids.TotalPrice),
            }}
            
            label={`${orderModel.TotalPrice.displayName}:`}
          />
          <TextField
            size="small"
            autoComplete="off"
            type='datetime-local'
            value={values.CreateDate ?? ''}
            helperText={valids.CreateDate ?? ''}
            FormHelperTextProps={{
              error: Boolean(valids.CreateDate),
            }}
            
            label={`${orderModel.CreateDate.displayName}:`}
          />
        </Stack>
      </AccorCard>
    </>
  );
}
export default memo(InfoComponent);
