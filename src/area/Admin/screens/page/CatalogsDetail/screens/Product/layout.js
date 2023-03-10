import { memo, useEffect } from 'react';
import { useHandleTitle } from '~/hooks/Title';
import { Grid } from '@mui/material';

import {  routersAdmin } from '~/config/Router';

import Provider from '../../provider';
import Head from '../../components/Head';
import InfoComponent from './Info';
import OptionComponent from './Option';
import DescriptionComponent from './Description';
function CatalogProductLayoutComponent({
  state,
  dispath,
  rulers,
  title,
  loading,
  handle,
  datas
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
          back={adminRouters.product.index.getAction()}
        />
        <InfoComponent xs={7} />
        <OptionComponent xs={5} />
        <DescriptionComponent xs={12} />
      </Provider>
    </Grid>
  );
}
export default memo(CatalogProductLayoutComponent);
