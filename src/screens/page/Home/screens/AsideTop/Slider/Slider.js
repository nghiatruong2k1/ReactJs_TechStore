import { memo, useRef, useReducer, useState, useEffect } from 'react';
import { Grid, Box } from '@mui/material/';
import { initState, reducerState } from './init';
import Provider from './provider';
import SliderServices from '~/services/slider';
import { useInitLoading } from '~/hooks/Loading';
import { Slider } from '~/components';
import styles from './Slider.module.css';
function SliderComponent({ ...props }) {
  const thisRef = useRef(null);
  const sliderServices = SliderServices('home sliders');
  const [state, dispath] = useReducer(reducerState, initState);
  const [loading, handleLoading] = useInitLoading();
  const [data, setData] = useState(Array(5).fill(null));
  useEffect(() => {
    const ourLoading = handleLoading();
    const ourRequest = sliderServices.getAll({}, (data) => {
      setData(data);
      ourLoading();
    });
    return () => {
      ourRequest();
      setData(Array(5).fill(null));
    };
  }, []);
  return (
    <>
      <Grid item p={0.5} {...props}>
        <Provider value={{ state, dispath, slider: thisRef.current }}>
          <Slider className={styles.root} data={data} loading={loading} />
        </Provider>
      </Grid>
    </>
  );
}
export default memo(SliderComponent);
