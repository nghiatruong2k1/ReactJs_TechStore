import {useImperativeHandle,useRef,forwardRef,memo,useMemo,useState,useEffect} from 'react';
import styles from './styles.module.css';

const Image = (function(){
	return function({src,srcDefault,alt,className,cover,contain,...props},ref){
		const thisRef = useRef();
		const [isLoading,setLoad] = useState(false);
		useImperativeHandle(ref,()=>({
				...thisRef.current
			})
		);
		
		let Attr = {
			...props,
			type:"image",
			className:styles.image,
			loading:"lazy",
			alt:'hình ảnh'
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
			if(src && src !=""){
				return src;
			}else if(srcDefault){
				return srcDefault;
			}else{
				return '/images/default-no-img.jpg';
			};	
		},[src,srcDefault])
		return(
			<img ref={thisRef} {...Attr}/>
		);
	};	
})();
export default memo(forwardRef(Image));