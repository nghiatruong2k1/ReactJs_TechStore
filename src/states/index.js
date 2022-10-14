import { memo, createContext, useContext } from 'react';
import { useInitLoading } from '~/hooks/Loading';
import { useInitAuth } from '~/hooks/Auth';
import { useInitTitle } from '~/hooks/Title';
import { useInitCart } from '~/hooks/Cart';
export const GlobalStateContext = createContext();
export const useGetGlobalStateContext = () => {
  return useContext(GlobalStateContext);
};
function GlobalStateProvider({ children }) {
  const auth = useInitAuth();
  const title = useInitTitle();
  const cart = useInitCart();
  return (
    <GlobalStateContext.Provider value={{ auth, title, cart }}>
      {children}
    </GlobalStateContext.Provider>
  );
}
export default memo(GlobalStateProvider);
