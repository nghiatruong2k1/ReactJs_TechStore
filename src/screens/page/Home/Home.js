import {memo,Fragment} from 'react';
import RecommendProduct from './screens/RecommendProduct';
import DealsOffersProduct from './screens/DealsOffersProduct';
import Brands from './screens/Brands';
import AsideTop from './screens/AsideTop';
function HomePageComponent(props){
    return (
        <Fragment>
            <AsideTop />
            <Brands />
            <RecommendProduct />
            <DealsOffersProduct />
        </Fragment>
    )
};export default memo(HomePageComponent)