import { memo, useEffect } from 'react';
import { useHandleTitle } from '~/hooks/Title';
import { Grid } from '@mui/material';
import InfoComponent from './Info';
import DetailComponent from './Detail';
import OptionComponent from './Option';
import Provider from '../../provider';
import Head from '../../components/Head';
import { adminRouters } from '~/area/Admin/router';
function CatalogBrandLayoutComponent({
  state,
  dispath,
  rulers,
  title,
  loading,
  handle,
  datas,
}) {
  const handleTitle = useHandleTitle();
  useEffect(() => {
    return handleTitle(title);
  }, [title]);

  return (
    <Grid container disabled={loading}>
      <Provider
        state={state}
        dispath={dispath}
        rulers={rulers}
        loading={loading}
        handle={handle}
        datas={datas}
      >
        <Head
          xs={12}
          title={title}
          back={adminRouters.order.index.getAction()}
        />
        <DetailComponent xs={12} />
        <InfoComponent xs={7} />
        <OptionComponent xs={5} />
      </Provider>
    </Grid>
  );
}
export default memo(CatalogBrandLayoutComponent);
