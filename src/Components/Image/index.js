import {useImperativeHandle,useRef,forwardRef,memo,useMemo,useEffect} from 'react';
import styles from './styles.module.css';

const Image = (function(){
	return function({src,srcDefault,alt,className,cover,contain,...props},ref){
		const thisRef = useRef();
		useImperativeHandle(ref,()=>({
				...thisRef.current
			})
		);
		let Attr = {
			...props,
			ref:thisRef,
			type:"image",
			className:styles.image,
			loading:"lazy",
			alt:'description of image'
		};
		if(className){
			Attr.className +=" "+className;
		};
		if(alt){
			Attr.alt=alt;
		};

		if(cover){
			Attr.className +=" "+styles.cover;
		}else if(contain){
			Attr.className +=" "+styles.contain;
		}
		Attr.src = useMemo(function(){
			let _src = "";
			if(src && src !=""){
				_src = src;
			}else if(srcDefault){
				_src = srcDefault;
			};
			return _src;	
		},[src,srcDefault])
		return(
			<img {...Attr}/>
		);
	};	
})();
export default memo(forwardRef(Image));