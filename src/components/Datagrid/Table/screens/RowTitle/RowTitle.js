import { memo, Fragment, useCallback } from 'react';
import clsx from 'clsx';
import { TableRow } from '@mui/material/';
import styles from '../../Table.module.css';

import Cell from '../../components/Cell';
import { useGetDatagridContext } from '../../../provider';
import AfterOption from './AfterOption';

function handleCheckChange(event) {
  const table = event.target.closest('.MuiAccordion-root');
  if (table) {
    const rows = Array.from(table.querySelectorAll('tbody tr'));
    rows.forEach(function (row, index) {
      const check = row.querySelector("td:first-child [type='checkbox']");
      check && check.checked !== event.target.checked && check.click();
    });
  }
}

function RowTitle({ displays }) {
  const { state, dispath } = useGetDatagridContext();
  const handleToggleShow = useCallback((name, show) => {
    dispath([name, show]);
  }, []);
  return (
    <TableRow className={clsx(styles.head)}>
      <Cell key={0} text={''} display={{ width: '2em' }} />
      {displays.map(({ title, ...display }, index) => {
        if (state[display.name]?.isShow) {
          return (
            <Cell
              key={index + 1}
              display={display}
              text={title}
              afterChild={
                display.name && (
                  <AfterOption
                    name={display.name}
                    show={state[display.name]?.isShow}
                    onToggleShow={handleToggleShow}
                  />
                )
              }
            />
          );
        } else {
          return <Fragment key={index + 1} />;
        }
      })}
    </TableRow>
  );
}
RowTitle.defaultProps = {
  displays: [],
};
export default memo(RowTitle);
