import { memo} from 'react';
import clsx from 'clsx';
import {
  Stack,
  Tooltip,
  IconButton,
} from '@mui/material/';

function OrderOption({ status,loading }) {
//   const { handle } = useContext(OrdersContext);
//   function handleCancel(action, message) {
//     !loading &&
//       data &&
//       data.Id &&
//       DialogResult({
//         message: message,
//         onYes: function () {
//           Fetch.put({
//             api: `api/Order/${action}/${data.Id}`,
//             onThen: function ({ data }) {
//               if (data.value) {
//                 handle.refetch();
//               }
//             },
//           });
//         },
//       });
//   }
  return (
    <Stack direction="row" spacing={2} alignItems="center">
      {status === 1 && (
        <Tooltip title={'Hủy đơn hàng'} placement="top" arrow>
          <span>
            <IconButton
              disabled={loading}
            >
              <span className={clsx('fas fa-times')} />
            </IconButton>
          </span>
        </Tooltip>
      )}
      {status === 3 && (
        <>
          <Tooltip title={'Đặt lại đơn hàng'} placement="top" arrow>
            <span>
              <IconButton
                disabled={loading}
              >
                <span className={clsx('fas fa-trash-restore')} />
              </IconButton>
            </span>
          </Tooltip>
          <Tooltip title={'Xóa đơn hàng'} placement="top" arrow>
            <span>
              <IconButton
                disabled={loading}
              >
                <span className={clsx('fas fa-trash')} />
              </IconButton>
            </span>
          </Tooltip>
        </>
      )}
    </Stack>
  );
}
export default memo(OrderOption);
