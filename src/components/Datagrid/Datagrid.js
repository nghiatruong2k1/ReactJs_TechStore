import { memo, useReducer } from 'react';
import PropTypes from 'prop-types';
import Provider from './provider';
import { initState, reducerState } from './init';
import { Card, CardActions, CardContent } from '@mui/material';
import DatagridTitle from './Title';
import DatagridOption from './Option';
import DataTable from './Table';
function DatagridComponent({
  loading,
  datasets,
  displays,
  title,
  option,
  optionData,
  footer,
}) {
  const [state, dispath] = useReducer(reducerState, initState(displays));
  return (
    <Provider value={{state,dispath}}>
      <Card>
        <CardActions sx={{ justifyContent: 'space-between' }}>
          <DatagridTitle title={title} />
          <DatagridOption>{option}</DatagridOption>
        </CardActions>
        <CardContent>
          <DataTable
            state={state}
            datasets={datasets}
            displays={displays}
            loading={loading}
            optionData={optionData}
          />
        </CardContent>
        <CardContent>{footer}</CardContent>
        <div></div>
      </Card>
    </Provider>
  );
}
DatagridComponent.propTypes = {
  datasets: PropTypes.array,
  displays: PropTypes.array,
};
DatagridComponent.defaultProps = {
  datasets: [],
  displays: [],
};
export default memo(DatagridComponent);
