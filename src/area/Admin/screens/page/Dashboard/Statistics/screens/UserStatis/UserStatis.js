import {memo} from 'react';
import UserAdminServices from '~/area/Admin/services/userAdmin';
import CardStatistic from '../../components/CardStatistic';
function UserStatisComponent(props){
    const services = UserAdminServices('UserStatisComponent');
    return (
        <CardStatistic title="Tài khoản" icon={<span className="fas fa-user" />} handleGetData={services.getCount} {...props}/>
    )
};export default memo(UserStatisComponent)