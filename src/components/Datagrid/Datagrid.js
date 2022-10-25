import { memo, useReducer, useRef } from 'react';
import PropTypes from 'prop-types';
import Provider from './provider';
import { initState, reducerState } from './init';
import { Card, CardActions, CardContent } from '@mui/material';
import TableChartIcon from '@mui/icons-material/TableChart';
import DatagridTitle from './Title';
import DatagridOption from './Option';
import DataTable from './Table';
function DatagridComponent({
  loading,
  datasets,
  displays,
  title,
  option,
  footer,
  model
}) {
  const [state, dispath] = useReducer(reducerState, initState(displays));
  const tableRef = useRef();
  return (
    <Provider
      value={{
        state,
        dispath,
        datasets,
        loading,
        title,
        model,
        table: tableRef.current,
      }}
    >
      <Card>
        <CardActions>
          <TableChartIcon />
          <DatagridTitle title={title} />
          <DatagridOption>{option}</DatagridOption>
        </CardActions>
        <CardContent sx={{ p: 1 }}>
          <DataTable
            ref={tableRef}
            datasets={datasets}
            displays={displays}
            loading={loading}
          />
        </CardContent>
        <CardContent sx={{ p: 1 }}>{footer}</CardContent>
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
