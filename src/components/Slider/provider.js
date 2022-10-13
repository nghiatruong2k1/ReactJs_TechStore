import { memo, createContext, useContext ,useEffect} from 'react';
export const SliderContext = createContext();
export const useGetSliderContext = () => {
  return useContext(SliderContext);
};
function SliderProvider({ children, value }) {
  return (
    <SliderContext.Provider value={value}>{children}</SliderContext.Provider>
  );
}
export default memo(SliderProvider);
