import {memo, useCallback} from 'react';
import ViewLayout from '../../layout';
import { BrandServices } from '~/services';
function BrandComponent(props){
    const brandServices = BrandServices('list brand');
	const handleGetData = useCallback((callback)=>{
		return brandServices.getAll({},callback);
	},[])
    return (
        <ViewLayout title={'Thương hiệu'} handleGetData={handleGetData} controller='brand'/>
    )
};export default memo(BrandComponent)