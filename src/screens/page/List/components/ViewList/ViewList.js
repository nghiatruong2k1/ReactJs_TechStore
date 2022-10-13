import { memo} from 'react';
import { ViewContent } from '~/components';
import ViewItem from '../ViewItem';
function ViewListComponent({ loading,data, controller }) {
  return (
    <>
        <ViewContent loading={loading} length={data.length}>
          {Array.isArray(data) &&
            data.map(function (data, index) {
              return (
                <ViewItem
                  key={index}
                  loading={!Boolean(data) || loading}
                  data={data}
                  controller={controller}
                />
              );
            })}
        </ViewContent>
      </>
  );
}
export default memo(ViewListComponent);
