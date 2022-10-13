import { memo, createContext, useContext ,useEffect} from 'react';
import SliderServices from '~/services/slider';
import { initCase } from './init';
export const SliderContext = createContext();
export const useGetSliderContext = () => {
  return useContext(SliderContext);
};
function SliderProvider({ children, value }) {
  const sliderServices = SliderServices('home sliders');
  useEffect(() => {
    value.dispath([initCase.SET_DATA]);
    value.dispath([initCase.SET_LOADING, true]);
    const ourRequest = sliderServices.getAll({}, (data) => {
      value.dispath([initCase.SET_DATA, data]);
      value.dispath([initCase.SET_LOADING, false]);
    });
    return ourRequest;
  }, []);
  return (
    <SliderContext.Provider value={value}>{children}</SliderContext.Provider>
  );
}
export default memo(SliderProvider);
