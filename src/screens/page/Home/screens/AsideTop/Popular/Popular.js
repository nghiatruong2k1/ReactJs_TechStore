import { memo, useMemo, useEffect, useState } from 'react';
import { Box, Grid, Typography } from '@mui/material/';
import Slider from 'react-slick';
import CategoryServices from '~/services/category';
import { routers, getAction } from '~/config/Router';

import { ViewContent } from '~/components';
import styles from './Popular.module.css';

import PopularItem from './Item';

function Populars({ ...props }) {
  const [data, setData] = useState([]);
  const [isLoading, setLoading] = useState(false);
  const categoryServices = CategoryServices('home categories popular');
  useEffect(() => {
    setData(Array(5).fill(null));
    setLoading(true);
    const ourRequest = categoryServices.getPopular({}, (data) => {
      const newdata = data.map((item) => ({
        text: item.Name,
        imgUrl: item.ImageUrl,
        to: getAction(routers.product.category, { alias: item.Alias }),
      }));
      setData(newdata);
      setLoading(false);
    });
    return ourRequest;
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
      vertical: true,
      verticalSwiping: true,
      slidesToShow: 2,
    };
  }, []);
  return (
    <Grid item xs px={0} {...props}>
      <Typography className={styles.title} component="h6">
        Danh mục nỗi bật
      </Typography>
      <Box position="relative">
        <ViewContent loading={isLoading} length={data.length}>
          <Slider {...settings}>
            {data.map(function (item, index) {
              return (
                <PopularItem
                  key={index}
                  loading={isLoading || !Boolean(item)}
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
