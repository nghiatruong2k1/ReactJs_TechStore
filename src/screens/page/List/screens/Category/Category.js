import {memo} from 'react';
import ViewLayout from '../../layout';
import { CategoryServices } from '~/services';
import { useCallback } from 'react';
function CategoryComponent(props){
    const categoryServices = CategoryServices('list category');
    const handleGetData = useCallback((callback)=>{
		return categoryServices.getAll({},callback);
	},[])
    return (
        <ViewLayout title={'Danh mục'} handleGetData={handleGetData} controller='category'/>
    )
};export default memo(CategoryComponent)