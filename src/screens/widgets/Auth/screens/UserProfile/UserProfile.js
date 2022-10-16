import { memo, Fragment, useMemo, useRef } from 'react';
import clsx from 'clsx';
import { Avatar, Box } from '@mui/material';
import { Dropdown } from '~/components';
import { useDisclosure } from '@mantine/hooks';
import { routers, getAction, routersAdmin } from '~/config/Router';
import { AuthServices } from '~/services';

function UserProfileComponent({
  toggleComponent,
  ImageUrl,
  FirstName,
  LastName,
  TypeId
}) {
  const fullName = useMemo(() => {
    return (FirstName ? FirstName : '') + (LastName ? ' ' + LastName : '');
  }, [FirstName, LastName]);
  const ref = useRef();
  const [isOpen, { open, close }] = useDisclosure(false);
  const authServices = AuthServices('user profile button')
  const data = useMemo(() => {
    const newData = [
      {
        text: 'Tài khoản',
        to: getAction(routers.profile.index),
        icon: <span className="fa fa-user" />,
      },{
        text:'Đăng xuất',
        onClick:()=>{
          authServices.logout();
        },
        icon:<span className="fas fa-sign-out-alt"/>
      }
    ];
    if (TypeId === 4) {
      newData.unshift({
        to: getAction(routersAdmin.area),
        icon: <span className={'fa fa-user-cog'} />,
        text: 'Trang quản trị',
      });
    }
    return newData;
  });
  return (
    <>
      <Box
        ref={ref}
        component={toggleComponent}
        icon={<Avatar src={ImageUrl} />}
        title={fullName}
        onClick={open}
      />
      <Dropdown
        data={data}
        open={isOpen}
        anchorEl={ref.current}
        onClose={close}
      />
    </>
  );
}
export default memo(UserProfileComponent);
