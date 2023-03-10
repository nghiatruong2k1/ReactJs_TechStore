import { memo, useEffect } from 'react';
import './styles.css';
import './fontawesome.css';
import './animations.css';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import styles from './Theme.module.css';
function StylesComponent({ children }) {
  useEffect(()=>{
    document.body.classList.add(styles.default,styles.light);
    //bodyRoot.classList.add(styles.default,styles.light)
  },[])
  return children;
}
export default memo(StylesComponent);
