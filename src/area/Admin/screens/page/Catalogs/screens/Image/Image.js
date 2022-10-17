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
import { useHandleTitle } from '~/hooks/Title';
import CatalogLayout from '../../layout';

import { reducerState, initState, initCase } from '../../init';
import { formatByte, formatDate } from '~/config/Format';
function CatalogImageComponent(props) {
  const services = ImageAdminServices('CatalogImageComponent');
  const [state, dispath] = useReducer(reducerState, initState);
  const [data, setData] = useState([]);
  const [total, setTotal] = useState(0);
  const [loading, handleLoading] = useInitLoading();
  const handleTitle = useHandleTitle();
  useEffect(() => {
    setData(Array(state.limit).fill(null));
    const ourLoading = handleLoading();
    return services.getAll(
      {
        offset: (state.page - 1) * state.limit,
        limit: state.limit,
        isTrash: state.inTrash,
      },
      (data) => {
        setData(data);
        ourLoading();
      },
    );
  }, [state.inTrash, state.page, state.limit]);
  useEffect(() => {
    setTotal(1);
    dispath([initCase.SET_PAGE]);
    const ourLoading = handleLoading();
    return services.getCount({ isTrash: state.inTrash }, (data) => {
      setTotal(data);
      ourLoading();
    });
  }, [state.inTrash]);
  const displays = useMemo(() => {
    return [
      {
        title: imageModel.Url.displayName,
        name: 'Url',
        nameAlt: 'Name',
        type: 'image',
        width: '10em',
      },
      {
        title: imageModel.Name.displayName,
        name: 'Name',
        type: 'text',
        width: '5em',
      },
      {
        title:imageModel.Size.displayName,
        name:'Size',
        type:'number',
        width:'5em',
        format:(v)=>formatByte(v)
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
    ];
  }, []);
  const handleChangePage = useCallback((index) => {
    dispath([initCase.SET_PAGE, index]);
  }, []);
  const handleChangeTrash = useCallback(() => {
    dispath([initCase.TOGGLE_TRASH]);
  }, []);
  return (
    <Grid container>
      <CatalogLayout
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
export default memo(CatalogImageComponent);
