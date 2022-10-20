import {
  memo,
  useCallback,
  useEffect,
  useMemo,
  useReducer,
  useState,
} from 'react';
import CategoryAdminServices from '~/area/Admin/services/categoryAdmin';
import { categoryModel } from '~/models/category';
import { formatDate } from '~/config/Format';
import { Link } from 'react-router-dom';
import { getAction, routersAdmin } from '~/config/Router';
import { Grid } from '@mui/material';
import { useInitLoading } from '~/hooks/Loading';
import CatalogLayout from '../../layout';
import PublicButton from '../../components/PublicButton';
import DeleteButton from '../../components/DeleteButton';
import { reducerState, initState, initCase } from '../../init';
function CatalogCategoryComponent(props) {
  const services = CategoryAdminServices('CatalogCategoryComponent');
  const [state, dispath] = useReducer(reducerState, initState);
  const [data, setData] = useState([]);
  const [total, setTotal] = useState(0);
  const [loading, handleLoading] = useInitLoading();
  const handleGetData = useCallback((onEnd) => {
    let ourRequest;
    dispath([
      initCase.CALLBACK,
      (prev) => {
        console.log(prev);
        ourRequest = services.getAll(
          {
            offset: (prev.page - 1) * prev.limit,
            limit: prev.limit,
            isTrash: prev.inTrash,
          },
          (data) => {
            setData(data);
          },
          onEnd,
        );
      },
    ]);
    return ourRequest;
  }, []);
  const handleGetTotal = useCallback((onEnd) => {
    let ourRequest;
    dispath([
      initCase.CALLBACK,
      (prev) => {
        ourRequest = services.getCount(
          { isTrash: prev.inTrash },
          (data) => {
            setTotal(data);
          },
          onEnd,
        );
      },
    ]);
    return ourRequest;
  }, []);
  const handleFetch = useCallback((onEnd) => {
    const fetchData = handleGetData();
    const fetchTotal = handleGetTotal();
    onEnd && onEnd();
    return () => {
      fetchData && fetchData();
      fetchTotal && fetchTotal();
    };
  }, []);

  const handleUpdate = useCallback((data, onEnd) => {
    return services.putData(
      data,
      (data) => {
        if (data?.value !== false) {
          handleFetch();
        }
      },
      onEnd,
    );
  }, []);
  const handleDelete = useCallback((id, onEnd) => {
    return services.deleteData(
      id,
      (data) => {
        if (data?.value !== false) {
          handleFetch();
        }
      },
      onEnd,
    );
  }, []);

  const displays = useMemo(() => {
    return [
      {
        title: categoryModel.Id.displayName,
        name: 'Id',
        type: 'text',
        width: '5em',
        format: (v) => (
          <Link
            to={getAction(
              routersAdmin.routers.category.update,
              { id: v },
              routersAdmin.area,
            )}
          >
            {v}
          </Link>
        ),
      },{
        title: categoryModel.ImageUrl.displayName,
        name: 'ImageUrl',
        nameAlt: 'Name',
        type: 'image',
        width: '5em',
      },
      {
        title: categoryModel.Name.displayName,
        name: 'Name',
        type: 'text',
        width: '5em',
      },
      {
        title: categoryModel.IsPopular.displayName,
        name: 'IsPopular',
        type: 'checkbox',
        width: '2em',
      },
      {
        title: categoryModel.CreateDate.displayName,
        name: 'CreateDate',
        type: 'datetime',
        width: '5em',
        format: (v) => formatDate(v),
      },
      {
        title: categoryModel.UpdateDate.displayName,
        name: 'UpdateDate',
        type: 'datetime',
        width: '5em',
        format: (v) => formatDate(v),
      },
      {
        title: '',
        type: 'option',
        width: '5em',
        format: (data) => (
          <>
            <PublicButton
              isPublic={data.IsPublic}
              onClick={(onEnd) => {
                data.IsPublic = !data.IsPublic;
                handleUpdate(data, onEnd);
              }}
            />
            <DeleteButton
              isTrash={data.IsTrash}
              onDelete={(onEnd) => {
                handleDelete(data.Id, onEnd);
              }}
              onClick={(onEnd) => {
                handleUpdate(
                  {
                    ...data,
                    IsTrash: !data.IsTrash,
                  },
                  onEnd,
                );
              }}
            />
          </>
        ),
      },
    ];
  }, []);
  useEffect(() => {
    setData(Array(state.limit).fill(null));
    const ourLoading = handleLoading();
    return handleGetData(ourLoading);
  }, [state.inTrash, state.page, state.limit]);

  useEffect(() => {
    setTotal(1);
    dispath([initCase.SET_PAGE]);
    const ourLoading = handleLoading();
    return handleGetTotal(ourLoading);
  }, [state.inTrash]);
  return (
    <Grid container>
      <CatalogLayout
        title={'Quản lí danh mục' + (state.inTrash ? ' (thùng rác) ' : '')}
        state={state}
        dispath={dispath}
        data={data}
        total={total}
        loading={loading}
        displays={displays}
        option={{
          add: {
            to: getAction(
              routersAdmin.routers.category.add,
              {},
              routersAdmin.area,
            ),
          },trash:{},
        }}
        component={Grid}
        item
        xs={12}
      />
    </Grid>
  );
}
export default memo(CatalogCategoryComponent);
