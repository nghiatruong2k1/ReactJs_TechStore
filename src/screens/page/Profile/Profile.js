import {memo,Fragment, useEffect} from 'react';
import clsx from 'clsx';
import { routers } from '~/config/Router';
import { useHandleTitle } from '~/hooks/Title';
import { Stack } from '@mui/material';
import  ProfileInfo from './Info';
function ProfileComponent(props){
    const handleTitle = useHandleTitle();
    useEffect(() => {
      return handleTitle(routers.profile.index.title);
    }, []);
    return (
        <Stack spacing={2}>
            <ProfileInfo />
        </Stack>
    )
};export default memo(ProfileComponent)