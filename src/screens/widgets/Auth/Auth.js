import { memo, Fragment, useMemo } from 'react';
import { useGetAuth } from '~/hooks/Auth';
import { routerActions } from './router';
import AuthLayoutComponent from './layout';
import UserProfile from './screens/UserProfile';
function AuthComponent({ toggleComponent, ...props }) {
  const { state } = useGetAuth();
  const Content = useMemo(() => {
    return routerActions[state.action].content ?? Fragment;
  }, [state.action]);
  if (Boolean(state.user)) {
    return <UserProfile toggleComponent={toggleComponent} {...state.user} />;
  } else {
    return (
      <AuthLayoutComponent
        toggleComponent={toggleComponent}
        title={routerActions[state.action].title}
      >
        <Content />
      </AuthLayoutComponent>
    );
  }
}
export default memo(AuthComponent);
