import {
    memo,
    forwardRef,
    useMemo,
  } from 'react';

  import { Paper } from '@mui/material/';
  
  import { Frame, Image } from '~/components';
  import Slider from 'react-slick';
  import { initCase } from '../init';
  import { useGetSliderContext } from '../provider';
  import styles from '../Slider.module.css';
  function Images({variant,fit}, ref) {
    const {data,loading, dispath } = useGetSliderContext();
    const settings = useMemo(function () {
      return {
        arrows: false,
        dots: false,
        infinite: true,
        autoplay: true,
        autoplaySpeed: 2000,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        rows: 1,
        slidesPerRow: 1,
        beforeChange: function (oldIndex, newIndex) {
          dispath([initCase.SET_INDEX,newIndex]);
        },
      };
    }, []);
    return (
      <Slider  className='slider-root'  ref={ref}  {...settings}>
        {data.map(function (item, index) {
          let isLoading = Boolean(item) && loading;
          return (
            <Frame
              containerProps={{ component: Paper, variant: 'outlined' }}
              className={styles.item}
              variant={variant || 'rectangle'}
              loading={isLoading}
              key={index}
            >
              <Image fit={fit || 'cover'} loading={isLoading} src={item && item.ImageUrl} alt={item && item.Alt} />
            </Frame>
          );
        })}
      </Slider>
    );
  }
  export default memo(forwardRef(Images));
  