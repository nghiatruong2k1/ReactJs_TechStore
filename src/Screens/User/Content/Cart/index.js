import {memo,Fragment} from 'react';

import {Routes,Route} from 'react-router-dom';
import {getActionName} from "../../../../Config/Route/";

import HomeCart from './Home/';
import ConfirmCart from './Confirm/';
function Component(props){
    useEffect(function(){
        global.config.setTitleWebsite("Giỏ hàng");
    })
    return (
        <Fragment>
            <HomeCart />
            <Routes>
                <Route path={`${getActionName("user","cart","confirm")}`} element={<ConfirmCart />}/>
            </Routes>
        </Fragment>
    )
};export default memo(Component)