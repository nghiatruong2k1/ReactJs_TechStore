import { memo, createContext, useContext, useEffect } from 'react';
import { ImageServices } from '~/services';
import { initCase } from './init';
export const PictureContext = createContext();
export const useGetPictureContext = () => {
  return useContext(PictureContext);
};
function PictureProvider({ children, value, id }) {
  const imageServices = ImageServices('product detail images');
  useEffect(() => {
    if (id) {
      value.dispath([initCase.SET_DATA]);
      value.dispath([initCase.SET_LOADING, true]);
      const ourRequest = imageServices.getsByProductId(id, (data) => {
        value.dispath([initCase.SET_DATA, data]);
        value.dispath([initCase.SET_LOADING, false]);
      });
      return ourRequest;
    }
  }, [id]);
  return (
    <PictureContext.Provider value={value}>{children}</PictureContext.Provider>
  );
}
export default memo(PictureProvider);
