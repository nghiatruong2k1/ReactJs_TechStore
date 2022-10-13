import { memo, useRef, useEffect, useMemo } from 'react';
import clsx from 'clsx';
import { Box, Button, Paper } from '@mui/material/';

import { Frame, Image } from '~/components';
import Slider from 'react-slick';
import { useGetSliderContext } from '../provider';
import styles from '../Slider.module.css';
function Dots({ fit}) {
  const {data,loading, state, slider } = useGetSliderContext();
  const thisRef = useRef();
  const settings = useMemo(function () {
    return {
      arrows: false,
      dots: false,
      infinite: false,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
      rows: 1,
      slidesToShow: 4,
      slidesToScroll: 1
    };
  }, []);

  useEffect(() => {
    if(thisRef.current){
        thisRef.current.slickGoTo(state.index);
    }
      
  }, [state.index]);
  return (
    <Box className={styles.dots} sx={{ px: { xs: 2, sm: 3, md: 4, lg: 5 } }}>
      <Slider ref={thisRef} {...settings}>
        {data.map(function (item, index) {
          return (
            <Box sx={{ px: 1 }} key={index}>
              <Frame
                variant="rectangle"
                loading={loading}
                containerProps={{
                  component: Paper,
                  variant: 'outlined',
                  className: clsx(styles.dotButton,'-containedInfo', {
                    [styles.dotActive]: index == state.index,
                  }),
                  onClick: (e) => {
                    slider && slider.slickGoTo(index);
                  },
                }}
              >
                <Image fit={fit || 'cover'} src={item.ImageUrl} alt={item.Alt} />
              </Frame>
            </Box>
          );
        })}
      </Slider>
    </Box>
  );
}
export default memo(Dots);
