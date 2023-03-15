import { memo } from 'react';
import { Stack } from '@mui/material';
import ProfileInfo from './Info';
function ProfileComponent(props) {
  return (
    <Stack spacing={2}>
      <ProfileInfo />
    </Stack>
  );
}
export default memo(ProfileComponent);
