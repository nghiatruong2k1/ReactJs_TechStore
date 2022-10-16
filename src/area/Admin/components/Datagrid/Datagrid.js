import { memo, Fragment, useReducer } from 'react';
import PropTypes from 'prop-types';
import Provider from './provider';
import { initState, reducerState } from './init';
import { Card, CardActions, CardContent, Stack } from '@mui/material';
import DatagridTitle from './Title';
import DatagridOption from './Option';
function DatagridComponent({title,titleOnTrash, handle, option }) {
  const [state, dispathState] = useReducer(reducerState, initState);
  return (
    <Provider value={state} dispath={dispathState} handle={handle}>
      <Card>
        <CardActions sx={{justifyContent:'space-between'}}>
            <DatagridTitle title={title} titleOnTrash={titleOnTrash} inTrash={state.inTrash}/>
          <DatagridOption {...option} />
        </CardActions>
        <CardContent></CardContent>
      </Card>
    </Provider>
  );
}
DatagridComponent.propTypes = {};
DatagridComponent.defaultProps = {
  option: {},
  handle: {},
};
export default memo(DatagridComponent);
