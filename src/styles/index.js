import { memo } from 'react';
import './styles.css';
import './fontawesome.css';
import './animations.css';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function StylesComponent({ children }) {
  return children;
}
export default memo(StylesComponent);
