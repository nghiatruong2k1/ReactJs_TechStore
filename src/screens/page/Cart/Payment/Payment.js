import { memo, useCallback, useMemo } from 'react';
import { Card, CardContent, Button } from '@mui/material';
import { useGetAuth } from '~/hooks/Auth';
import { useDisclosure } from '@mantine/hooks';
import { LoadingButton } from '@mui/lab';
import useDialogResult from '~/hooks/DialogResult';
import { OrderServices, MailerServices } from '~/services';
import { useSnackbar } from 'notistack';
import PaymentMail from './PaymentMail';
function PaymentButtonComponent({ data, voucher,total, totalPrice, loading,onSuccess }) {
  const [isLoading, { open, close }] = useDisclosure(false);
  const orderServices = OrderServices('cart payment');
  const mailerServices = MailerServices('cart payment');
  const { enqueueSnackbar } = useSnackbar();
  const dialogResult = useDialogResult();
  const {
    state: { user },
    dispath,
    initCase,
  } = useGetAuth();

  const handleClick = useCallback(() => {
    if (user) {
      if (Array.isArray(data) && data.length > 0) {
        const Content = <PaymentMail user={user} voucher={voucher} data={data} total={total} totalPrice={totalPrice}/>;
        dialogResult({
          title: 'Xác nhận đặt hàng',
          message: Content,
          onSuccess: () => {
            orderServices.postOrder({
                Products:data,
                Voucher:voucher
            },()=>{
                mailerServices.send(
                    {
                      content: Content,
                      subject: 'Bạn có 1 đơn hàng mới',
                      user,
                    },
                    () => {
                      enqueueSnackbar({
                        message: 'Đã gửi xác thực đơn hàng đến Email của bạn!',
                        type: 'success',
                      });
                    },
                    () => {},
                );
                onSuccess && onSuccess();
            })
          },
          onCancel: () => {},
        });
      }
    } else {
      enqueueSnackbar({
        message: 'Vui lòng đăng nhập để thanh toán!',
        type: 'warning',
      });
      dispath([initCase.TOGGLE_OPEN, true]);
    }
  }, [user, data, voucher]);
  const isDisabled = useMemo(() => {
    return !Boolean(Array.isArray(data) && data.length > 0);
  }, [data]);
  return (
    <Card>
      <CardContent sx={{ py: 0.5, textAlign: 'center' }}>
        <LoadingButton
          onClick={handleClick}
          color="success"
          variant="contained"
          loadingPosition="start"
          loading={isLoading}
          disabled={isDisabled}
          startIcon={<span className="fas fa-credit-card" />}
        >
          Thanh toán
        </LoadingButton>
      </CardContent>
      <div></div>
    </Card>
  );
}
export default memo(PaymentButtonComponent);
