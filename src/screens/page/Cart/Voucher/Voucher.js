import { memo, useCallback, useEffect, useReducer } from 'react';
import {
  Grid,
  Paper,
  FormControl,
  TextField,
  Typography,
  Tooltip,
  InputAdornment,
  IconButton,
  CardContent,
  Card,
  Stack,
} from '@mui/material/';
import { initCase, initState, reducerState } from './init';
import formatNumber from 'number-format.js';
import { VoucherServices } from '~/services';
import { checkValue } from '~/config/Validate';
import { voucherModel } from '~/models/voucher';
import { getRulers } from '~/models';
const rules = getRulers(voucherModel);
function VoucherCode({ voucher, onChange }) {
  const [state, dispathVoucher] = useReducer(reducerState, initState);
  const voucherServices = VoucherServices('cart voucher');
  useEffect(
    function () {
      dispathVoucher([initCase.CHANGE_VALID]);
      dispathVoucher([initCase.CHANGE_VALUE, voucher?.Code]);
    },
    [voucher],
  );
  const handleSubmit = useCallback(
    (e) => {
      e.isDefaultPrevented();
      e.preventDefault();
      const check = checkValue(state.value, rules.Code, {}, (valids) => {
        dispathVoucher([initCase.CHANGE_VALID, valids[0]]);
      });
      if (check === 0) {
        voucherServices.get(
          state.value,
          (data) => {
            onChange && onChange(data);
          },
          () => {
            dispathVoucher([initCase.CHANGE_VALID, 'Có lỗi xãy ra!']);
          },
        );
      }
    },
    [state.value],
  );
  const handleChange = useCallback((e) => {
    dispathVoucher([initCase.CHANGE_VALUE, e.target.value]);
  }, []);
  const handleFocus = useCallback((e) => {
    dispathVoucher([initCase.CHANGE_VALID]);
  }, []);
  const handleBlur = useCallback(
    (e) => {
      checkValue(state.value, rules.Code, {}, (valids) => {
        dispathVoucher([initCase.CHANGE_VALID, valids[0]]);
      });
    },
    [state.value],
  );
  return (
    <Card>
      <CardContent>
        <FormControl
          component="form"
          method="post"
          onSubmit={handleSubmit}
          fullWidth
        >
          <Typography>{`${voucherModel.Code.displayName}:`}</Typography>
          <TextField
            fullWidth
            value={state.value}
            onChange={handleChange}
            onFocus={handleFocus}
            onBlur={handleBlur}
            size="small"
            error={Boolean(state.valid)}
            helperText={state.valid}
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <span className="fas fa-ticket-alt" />
                </InputAdornment>
              ),
              endAdornment: (
                <InputAdornment position="end">
                  <Tooltip placement="top" title="Áp dụng" arrow>
                    <IconButton type="submit">
                      <span className="fas fa-paper-plane" />
                    </IconButton>
                  </Tooltip>
                </InputAdornment>
              ),
            }}
          />
        </FormControl>
        <Stack direction="row">
          <Typography>Đang sử dụng:</Typography>
          <Typography flex="1" align="right">
            {voucher?.Code || "Không sử dụng"}
          </Typography>
        </Stack>
        <Stack direction="row">
          <Typography>Giảm:</Typography>
          <Typography flex="1" align="right">
            {formatNumber('#,##0.# %', voucher?.Value || 0)}
          </Typography>
        </Stack>
        <Stack direction="row">
          <Typography>{voucher?.ShortDes}</Typography>
        </Stack>
      </CardContent>
    </Card>
  );
}
export default memo(VoucherCode);
