import { memo, useCallback } from 'react';
import { AccorCard, Datagrid, Paging } from '~/components';
import { initCase } from './init';
import AddButton from './components/AddButton';
import TrashButton from './components/TrashButton';
import PublicButton from './components/PublicButton';
import DeleteButton from './components/DeleteButton';
function CatalogLayout({
  state,
  dispath,
  displays,
  total,
  data,
  loading,
  ...props
}) {
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
          optionData={{
            title: 'Tùy chọn',
            content: (data) => (
              <>
                <PublicButton isPublic={data.IsPublic} />
                <DeleteButton isTrash={data.IsTrash} />
              </>
            ),
          }}
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
