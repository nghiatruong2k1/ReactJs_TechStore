import {forwardRef,memo} from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';

import {Skeleton,Box} from '@mui/material/';

function Frame({loading,children,className,containerProps,contentProps,rectangle,square,circle,...props}){
		const frameAttr = {
			...props,
			className:styles.frame
		};

		if(className){
			frameAttr.className+=" "+className;
		};

		const containerAttr = {
			...containerProps
		};
		if(styles.container){
			containerAttr.className+=" "+styles.container;
		};

		if(circle){
			containerAttr.className +=" "+styles.circle;
		}else if(square){
			containerAttr.className +=" "+styles.square;
		}else{
			containerAttr.className +=" "+styles.rectangle;
		}

		const contentAttr = {
			...contentProps
		};
		if(styles.content){
			contentAttr.className+=" "+styles.content;
		};
		if(loading){
			contentAttr.className+=" "+styles.loading;
		}

		const skeletonAttr = {
			className:styles.skeleton
		};

		return(
			<Box {...frameAttr}>
				<Box {...containerAttr}>
					<Box {...contentAttr}>
						{children}
					</Box>
					{
						(loading) 
						&& <Skeleton {...skeletonAttr} variant="rectangular" />
					}	
				</Box>
			</Box>
		);
};
export default memo(Frame);