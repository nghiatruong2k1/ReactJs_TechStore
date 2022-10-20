import { memo, createContext, useContext, useCallback } from 'react';
import { checkObject } from '~/config/Validate';
import { initCase } from './init';
export const CatalogDetailContext = createContext();
export const useGetCatalogDetailContext = () => {
  return useContext(CatalogDetailContext);
};
function CatalogDetailProvider({
  children,
  state,
  dispath,
  rulers,
  loading,
  datas,
  handle: { handleLoading, handleSave, handleFetch },
}) {
  const handleChangeValue = useCallback((name, value) => {
    dispath([initCase.CHANGE_VALUE, [name, value]]);
  }, []);

  const handleSubmit = useCallback((onEnd) => {
    let ourSubmit;
    const ourLoading = handleLoading();
    dispath([
      initCase.CALLBACK,
      (prev) => {
        const error = checkObject(prev.values, rulers, (name, valids) => {
          dispath([initCase.CHANGE_VALID,[name,valids[0]]])
        });
        if (error === 0 && handleSave) {
          ourSubmit = handleSave(prev.values, () => {
            ourLoading();
            onEnd && onEnd();
          });
        } else {
          ourLoading();
        }
      },
    ]);
    return ourSubmit;
  }, []);
  return (
    <CatalogDetailContext.Provider
      value={{
        datas,
        state,
        dispath,
        loading,
        handle: {
          handleChangeValue,
          handleSubmit,
          handleLoading,
          handleSave,
          handleFetch,
        },
      }}
    >
      {children}
    </CatalogDetailContext.Provider>
  );
}
export default memo(CatalogDetailProvider);
