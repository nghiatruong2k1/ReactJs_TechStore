import { memo, useRef, useMemo } from 'react';
import { Box} from '@mui/material/';

import { ViewContent } from '~/components';
import Slider from 'react-slick';

import ProductItem from '../Product';
import { useGetDealsOffersContext } from '../provider';

function Content({ children }) {
  const { state } = useGetDealsOffersContext();
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
