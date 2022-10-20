import { memo, Fragment } from 'react';
import clsx from 'clsx';
import { AuthWidget } from '~/screens/widgets';
import AuthProfile from './AuthProfile';
function AuthComponent(props) {
  return <AuthWidget toggleComponent={AuthProfile} />;
}
export default memo(AuthComponent);
