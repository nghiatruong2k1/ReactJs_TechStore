import { memo, Fragment, useMemo, useEffect } from 'react';
import { useCookies } from 'react-cookie';
import { UserServices } from '~/services';
import { useGetAuth } from '~/hooks/Auth';
import { routerActions } from './router';
import AuthLayoutComponent from './layout';
import UserProfile from './screens/UserProfile';
function AuthComponent({ toggleComponent, ...props }) {
  const { state, dispath, initCase } = useGetAuth();
  const [cookies] = useCookies(['token']);
  const useServices = UserServices();
  const Content = useMemo(() => {
    return routerActions[state.action].content ?? Fragment;
  }, [state.action]);
  useEffect(() => {
    dispath([initCase.SET_USER]);
    dispath([initCase.TOGGLE_LOADING, true]);
    if (cookies['token']) {
      const ourRequest = useServices.get({}, (data) => {
        dispath([initCase.SET_USER, data]);
        dispath([initCase.TOGGLE_LOADING, false]);
      });
      return ourRequest;
    } else {
      dispath([initCase.TOGGLE_LOADING, false]);
    }
  }, [cookies['token']]);
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
