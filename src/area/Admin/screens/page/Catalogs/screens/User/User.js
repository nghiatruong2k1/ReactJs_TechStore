import {
  memo,
  useCallback,
  useEffect,
  useMemo,
  useReducer,
  useState,
} from 'react';
import UserAdminServices from '~/area/Admin/services/userAdmin';
import { userModel } from '~/models/user';
import { formatDate } from '~/config/Format';
import { Grid } from '@mui/material';
import { useInitLoading } from '~/hooks/Loading';
import { reducerState, initState, initCase } from '../../init';

import CatalogLayout from '../../layout';
import PublicButton from '../../components/PublicButton';
import DeleteButton from '../../components/DeleteButton';
import { routersAdmin } from '~/config/Router';
import { Link } from 'react-router-dom';
function CatalogUserComponent(props) {
  const services = UserAdminServices('CatalogUserComponent');
  const [state, dispath] = useReducer(reducerState, initState);
  const [data, setData] = useState([]);
  const [total, setTotal] = useState(0);
  const [loading, handleLoading] = useInitLoading();
  const handleGetData = useCallback((onEnd) => {
    let ourRequest;
    dispath([
      initCase.CALLBACK,
      (prev) => {
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
        title: userModel.Id.displayName,
        name: 'Id',
        type: 'text',
        width: '5em',
        format: (v, data) => (
          <Link
            to={routersAdmin.user.update.getAction({ id: data.Id })}
          >
            {v}
          </Link>
        ),
      },{
        title: userModel.ImageUrl.displayName,
        name: 'ImageUrl',
        nameAlt: 'Email',
        type: 'image',
        width: '5em',
      },
      {
        title: userModel.Email.displayName,
        name: 'Email',
        type: 'text',
        width: '5em',
        format: (v) => <a href={`mailto:${v}`}>{v}</a>,
      },
      {
        title: userModel.FirstName.displayName,
        name: 'FirstName',
        type: 'text',
        width: '5em',
      },
      {
        title: userModel.LastName.displayName,
        name: 'LastName',
        type: 'text',
        width: '5em',
      },
      {
        title: userModel.Location.displayName,
        name: 'Location',
        type: 'text',
        width: '5em',
      },
      {
        title: userModel.Phone.displayName,
        name: 'Phone',
        type: 'text',
        width: '5em',
      },
      {
        title: userModel.TypeName.displayName,
        name: 'TypeName',
        type: 'text',
        format: (v, data) => {
          let color = '--info';
          if (data.TypeId === 4) {
            color = '--error';
          } else if (data.TypeId === 3) {
            color = '--success';
          } else if (data.TypeId === 2) {
            color = '--warning';
          }
          return <span style={{ color: `var(${color})` }}>{v}</span>;
        },
        width: '8em',
      },
      {
        title: userModel.CreateDate.displayName,
        name: 'CreateDate',
        type: 'datetime',
        width: '5em',
        format: (v) => formatDate(v),
      },
      {
        title: userModel.UpdateDate.displayName,
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
        title={routersAdmin.user.index.title + (state.inTrash ? ' (thùng rác) ' : '')}
        state={state}
        dispath={dispath}
        data={data}
        total={total}
        loading={loading}
        displays={displays}
        option={{ trash: {} }}
        component={Grid}
        item
        xs={12}
      />
    </Grid>
  );
}
export default memo(CatalogUserComponent);
