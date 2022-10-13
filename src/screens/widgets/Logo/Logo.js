import { memo } from 'react';
import { Link } from 'react-router-dom';
import Image from '~/components/Image';
import {routers} from '~/config/Router';
function LogoComponent(props) {
    console.log(process.env)
  return (
    <Link to={routers.home}>
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
