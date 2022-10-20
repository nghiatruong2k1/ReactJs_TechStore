import { memo, useCallback, useEffect } from 'react';
import { AccorCard, Datagrid, Paging } from '~/components';
import { initCase } from './init';
import { useHandleTitle } from '~/hooks/Title';
import AddButton from './components/AddButton';
import TrashButton from './components/TrashButton';

function CatalogLayout({
  state,
  dispath,
  displays,
  total,
  data,
  title,
  loading,
  option,
  ...props
}) {
  const handleTitle = useHandleTitle();
  useEffect(() => {
    return handleTitle(title);
  }, [title]);

  const handleChangePage = useCallback((index) => {
    dispath([initCase.SET_PAGE, index]);
  }, []);

  const handleChangeTrash = useCallback(() => {
    dispath([initCase.TOGGLE_TRASH]);
  }, []);

  return (
    <>
      <AccorCard title={'Bảng quản lý'} open={true} {...props}>
        <Datagrid
          title={title}
          option={
            <>
              {option.add && <AddButton {...option.add} />}
              {option.trash && (
                <TrashButton
                  onClick={handleChangeTrash}
                  loading={state.isLoading}
                  inTrash={state.inTrash}
                />
              )}
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
CatalogLayout.defaultProps = {
  option: {},
};
export default memo(CatalogLayout);
