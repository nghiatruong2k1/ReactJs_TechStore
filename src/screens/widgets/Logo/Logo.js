import { memo } from 'react';
import { Link } from 'react-router-dom';
import Image from '~/components/Image';
import { DefaultController } from '~/controllers';
function LogoComponent(props) {
  return (
    <Link to={DefaultController.home.getAction()}>
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
