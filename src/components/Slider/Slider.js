import { memo, useRef, useReducer } from 'react';
import { Box } from '@mui/material/';
import { initState, reducerState } from './init';
import Provider from './provider';

import Images from './Images';
import Arrows from './Arrows';
import Dots from './Dots';
import './Slider.css';
function SliderComponent({ variant, fit, data, loading}) {
  const [state, dispath] = useReducer(reducerState, initState);
  const thisRef = useRef(null);
  return (
    <Box position="relative">
      <Provider
        value={{ data, loading, state, dispath, slider: thisRef.current }}
      >
        {Array.isArray(data) && (
          <>
            <Images ref={thisRef} variant={variant} fit={fit} />
            {data.length > 1 && (
              <>
                <Arrows /> <Dots fit={fit} />
              </>
            )}
          </>
        )}
      </Provider>
    </Box>
  );
}
export default memo(SliderComponent);
