import { memo, useCallback, useEffect } from 'react';
import { AccorCard, Datagrid, Paging } from '~/components';
import { initCase } from './init';
import { useHandleTitle } from '~/hooks/Title';
import AddButton from './components/AddButton';
import TrashButton from './components/TrashButton';
// import PublicButton from './components/PublicButton';
// import DeleteButton from './components/DeleteButton';
function CatalogLayout({
  state,
  dispath,
  displays,
  total,
  data,
  title,
  loading,
  ...props
}) {

  const handleTitle = useHandleTitle();
  useEffect(()=>{
    return handleTitle(title)
  },[title])
  const handleChangePage = useCallback((index) => {
    dispath([initCase.SET_PAGE, index]);
  }, []);
  const handleChangeTrash = useCallback(() => {
    dispath([initCase.TOGGLE_TRASH]);
  }, []);
  return (
    <>
      <AccorCard open={true} {...props}>
        <Datagrid
          option={
            <>
              <AddButton />
              <TrashButton
                onClick={handleChangeTrash}
                loading={state.isLoading}
                inTrash={state.inTrash}
              />
            </>
          }
          loading={loading}
          datasets={data}
          displays={displays}
          footer={
            <Paging
              total={total}
              limit={state.limit}
              page={state.page}
              onChange={handleChangePage}
              disabled={loading}
            />
          }
        />
      </AccorCard>
    </>
  );
}
export default memo(CatalogLayout);
