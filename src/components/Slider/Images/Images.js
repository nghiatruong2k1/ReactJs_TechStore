import { memo, forwardRef, useCallback, Fragment } from 'react';
import Slider from 'react-slick';
import { Paper } from '@mui/material/';
import { Frame, Image } from '~/components';

import { initCase } from '../init';
import { useGetSliderContext } from '../provider';
import styles from '../Slider.module.css';
function Images({ variant, fit }, ref) {
  const { data, loading, dispath } = useGetSliderContext();
  const handleBeforeChange = useCallback((oldIndex, newIndex) => {
    dispath([initCase.SET_INDEX, newIndex]);
  }, []);
  return (
    <Slider
      className={styles.images}
      ref={ref}
      arrows={false}
      dots={false}
      infinite={true}
      autoplay={false}
      autoplaySpeed={500}
      speed={500}
      slidesToShow={1}
      slidesToScroll={1}
      rows={1}
      slidesPerRow={1}
      beforeChange={handleBeforeChange}
    >
      {data.map(function (item, index) {
        let isLoading = Boolean(item) && loading;
        return (
          <Fragment key={index}>
            <Frame
              containerProps={{ component: Paper, variant: 'outlined' }}
              className={styles.item}
              variant={variant || 'rectangle'}
              loading={isLoading}
            >
              <Image
                fit={fit || 'cover'}
                loading={isLoading}
                src={item && item.ImageUrl}
                alt={item && item.Alt}
              />
            </Frame>
          </Fragment>
        );
      })}
    </Slider>
  );
}
export default memo(forwardRef(Images));
