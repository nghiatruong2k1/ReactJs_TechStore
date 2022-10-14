import { memo, useMemo } from 'react';
import { Stack, Typography, Divider, Card, CardContent } from '@mui/material/';
import formatNumber from 'number-format.js';
function Total({ total = 0, totalPrice = 0, saleValue = 0}) {
  const [salePrice, outPrice] = useMemo(() => {
    const s = Math.round((totalPrice * saleValue) / 100);
    return [s, Math.round(totalPrice - s)];
  }, [totalPrice, saleValue]);
  return (
    <Card>
      <CardContent>
        <Stack spacing={1}>
          <Stack direction="row">
            <Typography>Tổng sản phẩm:</Typography>
            <Typography flex="1" align="right">
              {formatNumber('#,##0.#', total)}
            </Typography>
          </Stack>
          <Stack direction="row">
            <Typography>Tổng giá:</Typography>
            <Typography flex="1" align="right">
              {formatNumber('#,##0.# đ', totalPrice)}
            </Typography>
          </Stack>
          <Stack direction="row">
            <Typography>Giảm giá:</Typography>
            <Typography flex="1" align="right">
              {formatNumber('#,##0.# đ', salePrice)}
            </Typography>
          </Stack>
          <Stack direction="row">
            <Typography>Tổng thanh toán:</Typography>
            <Typography flex="1" align="right">
              {formatNumber('#,##0.# đ', outPrice)}
            </Typography>
          </Stack>
        </Stack>
      </CardContent>
    </Card>
  );
}
export default memo(Total);
