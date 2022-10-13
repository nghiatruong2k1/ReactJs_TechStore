import { memo } from 'react';
import clsx from 'clsx';
import { IconButton } from '@mui/material/';
import styles from '../Slider.module.css';
import { useGetSliderContext } from '../provider';
function Arrows({ ...props }) {
  const { slider } = useGetSliderContext();
  return (
    <>
      <IconButton
        disabled={!slider}
        size='large'
        onClick={slider && slider.slickPrev}
        className={clsx(styles.arrow, styles.left)}
      >
        <span className="fas fa-chevron-left" />
      </IconButton>
      <IconButton
        disabled={!slider}
        size='large'
        onClick={slider && slider.slickNext}
        className={clsx(styles.arrow, styles.right)}
      >
        <span className="fas fa-chevron-right" />
      </IconButton>
    </>
  );
}
export default memo(Arrows);
