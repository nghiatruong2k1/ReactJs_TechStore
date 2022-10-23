import { memo, useMemo } from 'react';
import { Box, Grid } from '@mui/material/';
import { useGetBrandsContext } from '../provider';

import { ViewContent } from '~/components';
import Slider from 'react-slick';

import BrandsItem from '../Item';
import { useMediaQuery } from '@mantine/hooks';

function Content({ children, ...props }) {
  const { state, data,loading } = useGetBrandsContext();
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
    };
  }, []);
  const isSmallSize = useMediaQuery('(max-width: 600px)');
  return (
    <Grid item {...props}>
      <Box position="relative">
        <ViewContent loading={loading} length={data.length}>
          <Slider {...settings} slidesPerRow={isSmallSize ? 3 : 4}>
            {data.map((item, index)=>{
              return (
                <div key={index}>
                  <BrandsItem
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
    </Grid>
  );
}
export default memo(Content);
