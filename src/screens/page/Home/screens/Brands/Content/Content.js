import { memo, useMemo } from 'react';
import { Box, Grid } from '@mui/material/';
import { useGetBrandsContext } from '../provider';

import { ViewContent } from '~/components';
import Slider from 'react-slick';

import BrandsItem from '../Item';

function Content({ children, ...props }) {
  const { state, dispath } = useGetBrandsContext();
  const settings = useMemo(function () {
    return {
      arrows: false,
      dots: false,
      speed: 500,
      slidesToScroll: 1,
      autoplaySpeed: 2000,
      swipeToSlide: true,
      autoplay: true,
      infinite: true,
      rows: 2,
      slidesToShow: 1,
      slidesPerRow: 4,
    };
  }, []);
  return (
    <Grid item {...props}>
      <Box position="relative">
        <ViewContent loading={state.isLoading} length={state.data.length}>
          <Slider {...settings}>
            {state.data.map(function (data, index) {
              return (
                <div key={index}>
                  <BrandsItem
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
    </Grid>
  );
}
export default memo(Content);
