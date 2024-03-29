import { memo, useRef, useMemo } from 'react';
import { Box} from '@mui/material/';

import { ViewContent } from '~/components';
import Slider from 'react-slick';

import ProductItem from '../Product';
import { useGetDealsOffersContext } from '../provider';
import { useMediaQuery } from '@mantine/hooks';

function Content({ children }) {
  const { data,loading,state } = useGetDealsOffersContext();
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
    };
  }, []);
  const isSmallSize = useMediaQuery('(max-width: 600px)');
  return (
    <Box sx={{p:1}}>
      <Box position="relative">
        <ViewContent loading={loading} length={data.length}>
          <Slider
            ref={ref}
            {...settings}
            slidesToShow = {isSmallSize ? 3 : 4}
          >
            {data.map((item, index)=>{
              return (
                <div key={index}>
                  <ProductItem
                    loading={loading || !Boolean(item)}
                    data={item}
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
