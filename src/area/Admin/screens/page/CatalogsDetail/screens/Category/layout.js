import { memo, useEffect } from 'react';
import { useHandleTitle } from '~/hooks/Title';
import { Grid } from '@mui/material';
import InfoComponent from './Info';
import OptionComponent from './Option';
import ImageComponent from './Image';
import Provider from '../../provider';
import Head from '../../components/Head';
import { getAction, routersAdmin } from '~/config/Router';
function CatalogCategoryLayoutComponent({
  state,
  dispath,
  rulers,
  title,
  loading,
  handle,
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
      >
        <Head
          xs={12}
          title={title}
          back={getAction(
            routersAdmin.routers.category.index,
            {},
            routersAdmin.area,
          )}
        />
        <InfoComponent xs={7} />
        <OptionComponent xs={5} />
        <ImageComponent xs={5} />
      </Provider>
    </Grid>
  );
}
export default memo(CatalogCategoryLayoutComponent);
