import {memo,Fragment,useEffect} from 'react';

import {Routes,Route,useLocation} from 'react-router-dom';
import {getActionName} from "../../../../Config/Route/";

import HomeCart from './Home/';
import ConfirmCart from './Confirm/';
function Component(props){
    const location = useLocation()
    useEffect(function(){
        global.config.setTitleWebsite("Giỏ hàng");
    },[location])
    return (
        <Fragment>
            <HomeCart />
            <Routes>
                <Route path={`${getActionName("user","cart","confirm")}`} element={<ConfirmCart />}/>
            </Routes>
        </Fragment>
    )
};export default memo(Component)