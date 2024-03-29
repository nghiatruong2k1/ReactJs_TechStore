import { memo, createContext, useContext } from 'react';
export const DatagridContext = createContext();
export const useGetDatagridContext = () => {
  return useContext(DatagridContext);
};
function DatagridProvider({
  children,
  value
}) {
  return (
    <DatagridContext.Provider value={value}>
      {children}
    </DatagridContext.Provider>
  );
}
export default memo(DatagridProvider);
