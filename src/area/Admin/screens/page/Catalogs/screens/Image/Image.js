import {
  memo,
  useCallback,
  useEffect,
  useMemo,
  useReducer,
  useState,
} from 'react';
import ImageAdminServices from '~/area/Admin/services/imageAdmin';
import { imageModel } from '~/models/image';
import { Grid } from '@mui/material';
import { useInitLoading } from '~/hooks/Loading';
import CatalogLayout from '../../layout';
import PublicButton from '../../components/PublicButton';
import DeleteButton from '../../components/DeleteButton';
import { reducerState, initState, initCase } from '../../init';
import { formatByte, formatDate } from '~/config/Format';
function CatalogImageComponent(props) {
  const services = ImageAdminServices('CatalogImageComponent');
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
        title: imageModel.Id.displayName,
        name: 'Id',
        type: 'text',
        width: '5em',
      },
      {
        title: imageModel.Url.displayName,
        name: 'Url',
        nameAlt: 'Name',
        type: 'image',
        width: '5em',
      },
      {
        title: imageModel.Name.displayName,
        name: 'Name',
        type: 'text',
        width: '5em',
      },
      {
        title: imageModel.Size.displayName,
        name: 'Size',
        type: 'number',
        width: '5em',
        format: (v) => formatByte(v),
      },
      {
        title: imageModel.CreateDate.displayName,
        name: 'CreateDate',
        type: 'datetime',
        width: '5em',
        format: (v) => formatDate(v),
      },
      {
        title: imageModel.UpdateDate.displayName,
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
        title={'Quản lí hình ảnh' + (state.inTrash ? ' (thùng rác) ' : '')}
        state={state}
        dispath={dispath}
        data={data}
        total={total}
        loading={loading}
        displays={displays}
        option={{
          add: {},
          trash: {},
        }}
        component={Grid}
        item
        xs={12}
      />
    </Grid>
  );
}
export default memo(CatalogImageComponent);
