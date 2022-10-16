import { memo, useContext } from 'react';
import clsx from 'clsx';
import { TableContainer, Table, TableHead, TableBody } from '@mui/material/';
import styles from './Table.module.css';
import { ViewContent } from '~/components';
import RowTitle from './screens/RowTitle';
import RowData from './screens/RowData';
import RowEmpty from './screens/RowEmpty';
function TableComponent({ loading, datasets, displays }) {
  return (
    <TableContainer className={clsx(styles.container)}>
      <Table stickyHeader className={styles.table}>
        <TableHead>
          <RowTitle displays={displays} />
        </TableHead>
        <TableBody>
          <ViewContent
            loading={loading}
            length={(datasets && datasets.length) || 0}
            empty={<RowEmpty />}
          >
            {Array.isArray(datasets) &&
              datasets.map(function (data, index) {
                return (
                  <RowData
                    loading={!Boolean(data.Id) && loading}
                    data={data}
                    displays={displays}
                    key={index}
                  />
                );
              })}
          </ViewContent>
        </TableBody>
      </Table>
    </TableContainer>
  );
}
export default memo(TableComponent);
