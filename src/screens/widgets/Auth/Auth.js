import { memo, Fragment, useMemo, useCallback } from 'react';
import { useGetAuth } from '~/hooks/Auth';
import { routerActions } from './router';
import AuthLayoutComponent from './layout';
import UserProfile from './screens/UserProfile';
function AuthComponent({ toggleComponent, ...props }) {
  const { state ,handle:{handleClose}} = useGetAuth();
  const Content = useMemo(() => {
    return routerActions[state.action].content ?? Fragment;
  }, [state.action]);
  if (Boolean(state.user)) {
    return <UserProfile toggleComponent={toggleComponent} loading={state.isLoading} {...state.user} />;
  } else {
    return (
      <AuthLayoutComponent
        toggleComponent={toggleComponent}
        title={routerActions[state.action].title}
      >
        <Content onClose={handleClose}/>
      </AuthLayoutComponent>
    );
  }
}
export default memo(AuthComponent);
