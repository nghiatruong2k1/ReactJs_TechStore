import {memo,Fragment, useEffect} from 'react';
import clsx from 'clsx';
import { useHandleTitle } from '../../../hooks/Title';
import { Stack } from '@mui/material';
import  ProfileInfo from './Info';
function ProfileComponent(props){
    const handleTitle = useHandleTitle();
    useEffect(() => {
      return handleTitle('Thông tin tài khoản');
    }, []);
    return (
        <Stack spacing={2} py={2}>
            <ProfileInfo />
        </Stack>
    )
};export default memo(ProfileComponent)