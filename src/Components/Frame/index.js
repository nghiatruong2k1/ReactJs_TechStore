import {forwardRef,memo,useState,useMemo} from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';

import {Skeleton,Box} from '@mui/material/';

function Frame({loading,children,className,containerProps,contentProps,rectangle,square,circle,...props}){
		const [isLoaded,setLoad] = useState(false);
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
		contentAttr.onLoad = useMemo(function(){
			let timeOut = null;
			return function(){
				timeOut = setTimeout(function(){
					setLoad(true);
				},500)
			}
			return function(){
				clearTimeout(timeOut);
			}
		},[isLoaded]);
		contentAttr.onLoadStart = useMemo(function(){
			return function(event){
				setLoad(false);
			}
		},[isLoaded])
		if(styles.content){
			contentAttr.className+=" "+styles.content;
		};
		if(isLoaded && !loading){
			contentAttr.className+=" "+styles.loaded;
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
						(loading || !isLoaded) 
						&& <Skeleton {...skeletonAttr} variant="rectangular" />
					}	
				</Box>
			</Box>
		);
};
export default memo(Frame);