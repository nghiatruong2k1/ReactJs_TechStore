import {memo,Fragment} from 'react';
import { Navigate, Outlet } from 'react-router-dom'
import { useGetAuth } from '~/hooks/Auth';
function CheckLoginComponent(props){
    const {state:{user}} = useGetAuth();
    console.log(Boolean(user))
    return Boolean(user) ? <Outlet /> : <Navigate to='/'/>
};
export default memo(CheckLoginComponent)