import { memo,  useMemo } from 'react';
import { Navigate, Outlet } from 'react-router-dom';
import { useGetAuth } from '~/hooks/Auth';
import { useSnackbar } from 'notistack';
function CheckAdminPrivate() {
  const {
    state: { user },
  } = useGetAuth();
  const { enqueueSnackbar } = useSnackbar();
  return useMemo(() => {
    // if (user && user.TypeId < 4) {
    //   enqueueSnackbar({
    //     message: 'Bạn cần quyền Admin để truy cập',
    //     type: 'warning',
    //   });
    //   return <Navigate to="/" />;
    // }
    return <Outlet />;
  }, [user]);
}
export default memo(CheckAdminPrivate);
