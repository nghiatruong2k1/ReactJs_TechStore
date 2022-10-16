import { memo } from 'react';
import { Link } from 'react-router-dom';
import Image from '~/components/Image';
import {getAction, routers} from '~/config/Router';
function LogoComponent(props) {
  return (
    <Link to={getAction(routers.home)}>
      <Image
        alt={process.env.REACT_APP_WEBSITE_NAME}
        placeholder={process.env.REACT_APP_WEBSITE_NAME}
        src={process.env.REACT_APP_WEBSITE_LOGO}
        fit="contain"
        {...props}
      />
    </Link>
  );
}
export default memo(LogoComponent);
