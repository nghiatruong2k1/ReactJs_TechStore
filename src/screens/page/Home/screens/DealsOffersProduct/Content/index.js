import { memo, useEffect, useRef, useMemo } from 'react';
import { useTheme } from '@mui/material/styles';
import { Box, Grid } from '@mui/material/';

import { ViewContent } from '~/components';
import Slider from 'react-slick';

import ProductItem from '../Product';
import { useGetDealsOffersContext } from '../provider';
import { initCase } from '../init';

function Content({ children }) {
  const { state, dispath } = useGetDealsOffersContext();
  const ref = useRef();
  const settings = useMemo(function () {
    return {
      arrows: false,
      dots: false,
      speed: 500,
      slidesToScroll: 1,
      autoplaySpeed: 2000,
      infinite: true,
      autoplay: true,
      swipeToSlide: true,
      slidesToShow: 4,
    };
  }, []);

  // useEffect( () => {
  //     if(ref.current){
  //       console.log(ref.current)
  //       ref.current.slickGoTo(
  //         state.index / ref.current.innerSlider.state.slideCount,
  //       );
  //     }
  //   },
  //   [state.index],
  // );

  return (
    <Box sx={{p:1}}>
      <Box position="relative">
        <ViewContent loading={state.isLoading} length={state.data.length}>
          <Slider
            ref={ref}
            {...settings}
          >
            {state.data.map(function (data, index) {
              return (
                <div key={index}>
                  <ProductItem
                    loading={state.isLoading || !Boolean(data)}
                    data={data}
                  />
                </div>
              );
            })}
          </Slider>
          {children}
        </ViewContent>
      </Box>
    </Box>
  );
}
export default memo(Content);
