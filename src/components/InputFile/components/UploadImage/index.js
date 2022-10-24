import {memo} from 'react';
import Provider from "./provider";
import ImageList from "./List";
import ImageAdd from "./Add";

function UploadImage({...props}){
	return (
		<Provider>
			<ImageList />
			<ImageAdd />
		</Provider>
	)
}
export default memo(UploadImage);