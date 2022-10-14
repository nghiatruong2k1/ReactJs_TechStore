import { memo, Fragment, useMemo } from 'react';
import { useGetAuth } from '~/hooks/Auth';
import { routerActions } from './router';
import AuthLayoutComponent from './layout';
import UserProfile from './screens/UserProfile';
function AuthComponent({ toggleComponent, ...props }) {
  const { state, dispath, initCase } = useGetAuth();
  const Content = useMemo(() => {
    return routerActions[state.action].content ?? Fragment;
  }, [state.action]);
  if (state.user) {
    return (
      <UserProfile
        toggleComponent={toggleComponent}
        onOpen={()=>{dispath([initCase.TOGGLE_OPEN,true])}}
        {...state.user}
      />
    );
  } else {
    return (
      <AuthLayoutComponent
        toggleComponent={toggleComponent}
        title={routerActions[state.action].title}
        onClose={()=>{dispath([initCase.TOGGLE_OPEN,false])}}
      >
        <Content />
      </AuthLayoutComponent>
    );
  }
}
export default memo(AuthComponent);
