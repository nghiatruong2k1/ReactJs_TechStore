import {
  memo,
  useCallback,
  useEffect,
  useMemo,
  useReducer,
  useState,
} from 'react';
import { useParams, useSearchParams } from 'react-router-dom';
import { Grid } from '@mui/material';
import ProductImageServices from '~/area/Admin/services/productImageAdmin';
import { productImageModel } from '~/models/product';
import { adminRouters } from '~/area/Admin/router';
import { useInitLoading } from '~/hooks/Loading';

import CatalogLayout from '../../layout';
import { reducerState, initState, initCase } from '../../init';
import PublicButton from '../../components/PublicButton';
import DeleteButton from '../../components/DeleteButton';
import SaveButton from '../../components/SaveButton';

function CatalogProductImageDetailComponent(props) {
  const services = ProductImageServices(CatalogProductImageDetailComponent);
  const { id } = useParams();
  const [searchs] = useSearchParams();
  const [state, dispath] = useReducer(
    reducerState,
    initState({
      limit: searchs.get('limit'),
      page: searchs.get('page'),
      inTrash: searchs.get('inTrash'),
    }),
  );
  const [data, setData] = useState([]);
  const [total, setTotal] = useState(0);
  const [loading, handleLoading] = useInitLoading();
  const handleChangeData = useCallback(() => {
    setData((prev) => {
      return prev.map((item) => ({ ...item }));
    });
  }, []);
  const handleGetData = useCallback(
    (onEnd) => {
      let ourRequest;
      dispath([
        initCase.CALLBACK,
        (prev) => {
          ourRequest = services.getAll(
            {
              offset: (prev.page - 1) * prev.limit,
              limit: prev.limit,
              isTrash: prev.inTrash,
              productId: Number(id),
            },
            (data) => {
              setData(data);
            },
            onEnd,
          );
        },
      ]);
      return ourRequest;
    },
    [id],
  );
  const handleGetTotal = useCallback(
    (onEnd) => {
      let ourRequest;
      dispath([
        initCase.CALLBACK,
        (prev) => {
          ourRequest = services.getCount(
            { isTrash: prev.inTrash, productId: Number(id) },
            (data) => {
              setTotal(data);
            },
            onEnd,
          );
        },
      ]);
      return ourRequest;
    },
    [id],
  );
  const handleFetch = useCallback(
    (onEnd) => {
      const fetchData = handleGetData();
      const fetchTotal = handleGetTotal();
      onEnd && onEnd();
      return () => {
        fetchData && fetchData();
        fetchTotal && fetchTotal();
      };
    },
    [id],
  );
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
  useEffect(() => {
    setData(Array(state.limit).fill(null));
    const ourLoading = handleLoading();
    return handleGetData(ourLoading);
  }, [state.inTrash, state.page, state.limit, id]);

  useEffect(() => {
    setTotal(1);
    dispath([initCase.SET_PAGE]);
    const ourLoading = handleLoading();
    return handleGetTotal(ourLoading);
  }, [state.inTrash, id]);

  const displays = useMemo(() => {
    return [
      {
        title: productImageModel.ImageUrl.displayName,
        name: 'ImageUrl',
        nameAlt: 'Alt',
        type: 'image',
        width: '5em',
      },
      {
        title: productImageModel.Alt.displayName,
        name: 'Alt',
        type: 'text',
        width: '5em',
        onChange: () => {
          handleChangeData();
        },
      },
      {
        title: productImageModel.IsDefault.displayName,
        name: 'IsDefault',
        type: 'checkbox',
        width: '5em',
        onChange: () => {
          handleChangeData();
        },
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
                handleChangeData();
                onEnd();
              }}
            />
            <DeleteButton
              isTrash={data.IsTrash}
              onDelete={(onEnd) => {
                handleDelete(data.Id, onEnd);
              }}
              onClick={(onEnd) => {
                data.IsTrash = !data.IsTrash;
                handleUpdate(data, onEnd);
              }}
            />
          </>
        ),
      },
      {
        title: '',
        type: 'option',
        width: '2em',
        format: (data) => (
          <SaveButton
            onClick={(onEnd) => {
              handleUpdate(data, onEnd);
            }}
          />
        ),
      },
    ];
  }, []);
  return (
    <Grid container>
      <CatalogLayout
        title={
          adminRouters.product.image.title +
          (state.inTrash ? ' (thùng rác) ' : '')
        }
        option={{
          trash: {},
        }}
        state={state}
        dispath={dispath}
        data={data}
        total={total}
        loading={loading}
        displays={displays}
        component={Grid}
        item
        xs={12}
      />
    </Grid>
  );
}
export default memo(CatalogProductImageDetailComponent);
