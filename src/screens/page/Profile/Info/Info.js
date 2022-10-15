import { memo, useMemo } from 'react';
import { Avatar, Card, CardContent, CardHeader, Divider } from '@mui/material';
import { useGetAuth } from '~/hooks/Auth';
import { userModel } from '~/models/user';
import styles from './Info.module.css';
import { TyText } from '~/components';
function InfoComponent(props) {
  const {
    state: { user, isLoading },
  } = useGetAuth();
  const fullName = useMemo(() => {
    return (
      (user.FirstName ? user.FirstName : '') +
      (user.LastName ? ' ' + user.LastName : '')
    );
  }, [user.FirstName, user.LastName]);
  return (
    <Card>
      <CardHeader
        classes={{
          avatar: styles.avatar,
        }}
        avatar={<Avatar src={user.ImageUrl} />}
        title={
          <TyText
            before={<span className="fas fa-user" />}
            component={'b'}
            loading={isLoading}
          >
            {` ${fullName ?? ''} `}
          </TyText>
        }
        subheader={
          <TyText
            before={<span className="fas fa-envelope" />}
            loading={isLoading}
          >
            {` ${user.Email ?? ''} `}
          </TyText>
        }
      />
      <Divider />
      <CardContent>
        <TyText
          before={
            <>
              <span className="fas fa-map-marker-alt" />
              {` ${userModel.Location.displayName}: `}
            </>
          }
        >
          {` ${user.Location ?? ''} `}
        </TyText>
        <TyText
          before={
            <>
              <span className="fas fa-phone-volume" />
              {` ${userModel.Phone.displayName}: `}
            </>
          }
        >
          {` ${user.Phone ?? ''} `}
        </TyText>
      </CardContent>
    </Card>
  );
}
export default memo(InfoComponent);
