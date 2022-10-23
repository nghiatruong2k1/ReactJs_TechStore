import { memo, useEffect, useMemo, useState } from 'react';
import { Box, Grid, Typography } from '@mui/material/';
import Slider from 'react-slick';
import CategoryServices from '~/services/category';
import { routers, getAction } from '~/config/Router';

import { ViewContent } from '~/components';
import styles from './Popular.module.css';
import { useInitLoading } from '~/hooks/Loading';
import PopularItem from './Item';
import { useMediaQuery } from '@mantine/hooks';

function Populars({ ...props }) {
  const categoryServices = CategoryServices('home categories popular');
  const [loading, handleLoading] = useInitLoading();
  const [data, setData] = useState(Array(5).fill(null));
  useEffect(() => {
    const ourLoading = handleLoading();
    const ourRequest = categoryServices.getPopular({}, (data) => {
      const newdata = data.map((item) => ({
        text: item.Name,
        imgUrl: item.ImageUrl,
        to: routers.product.category.getAction({ alias: item.Alias }),
      }));
      setData(newdata);
      ourLoading();
    });
    return () => {
      ourRequest();
      setData(Array(5).fill(null));
    };
  }, []);
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
  const isMediumSize = useMediaQuery('(max-width: 900px)');
  const isSmallSize = useMediaQuery('(max-width: 500px)');
  return (
    <Grid item xs px={0} {...props}>
      <Typography className={styles.title} component="h6">
        Danh mục nỗi bật
      </Typography>
      <Box position="relative">
        <ViewContent loading={loading} length={data.length}>
          <Slider {...settings} vertical={!isMediumSize} verticalSwiping={!isMediumSize} slidesToShow={isSmallSize ? 3 : 2}>
            {data.map((item, index) => {
              return (
                <PopularItem
                  key={index}
                  loading={loading || !Boolean(item)}
                  data={item}
                />
              );
            })}
          </Slider>
        </ViewContent>
      </Box>
    </Grid>
  );
}
export default memo(Populars);
