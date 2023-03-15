import { memo, Fragment, useMemo } from 'react';
import { ListNav } from '~/components';
function FooterSocial(props) {
  const data = useMemo(function () {
    return [
      {
        icon: <span className="fab fa-facebook" />,
        text: 'Facebook',
      },
      {
        icon: <span className="fab fa-twitter" />,
        text: 'Twitter',
      },
      {
        icon: <span className="fab fa-instagram" />,
        text: 'Instagram',
      },
      {
        icon: <span className="fab fa-youtube" />,
        text: 'Youtube',
      },
    ];
  }, []);
  return (
    <Fragment>
      <ListNav datas={data} loading={false} title="Mạng xã hội" {...props} />
    </Fragment>
  );
}
export default memo(FooterSocial);
