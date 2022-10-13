import { memo, Fragment, useMemo } from 'react';
import { ListNav } from '~/components';
function FooterSocial(props) {
  const { datas, isLoading } = useMemo(function () {
    return {
      datas: [
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
      ],
      isLoading: false,
    };
  }, []);
  return (
    <Fragment>
      <ListNav datas={datas} loading={isLoading} title="Mạng xã hội" {...props} />
    </Fragment>
  );
}
export default memo(FooterSocial);
