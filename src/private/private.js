import { memo, Fragment, useMemo, useEffect } from 'react';
import { Navigate, Outlet } from 'react-router-dom';
import { useGetAuth } from '~/hooks/Auth';
import { useSnackbar } from 'notistack';
function PrivateComponent(props) {
  const {
    state: { user, isLoading },
    dispath,
  } = useGetAuth();
  const { enqueueSnackbar } = useSnackbar();
  return useMemo(() => {
    if (Boolean(!isLoading && !user)) {
      enqueueSnackbar({
        message: 'Vui lòng đăng nhập',
        type: 'warning',
      });
      return <Navigate to="/" />;
    }
    return <Outlet />;
  }, [user, isLoading]);
}
export default memo(PrivateComponent);
