import { memo } from 'react';
import clsx from 'clsx';
import { TableRow } from '@mui/material/';
import styles from '../../Table.module.css';

import Cell from '../../components/Cell';
// import AfterOption from "./AfterOption";

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

function RowTitle({ displays, optionData }) {
  return (
    <TableRow className={clsx(styles.head)}>
      <Cell key={0} text={''} display={{ width: '2em' }} />

      {displays.map(({ title, ...display }, index) => {
        return (
          <Cell
            key={index + 1}
            display={display}
            text={title}
            // afterChild={<AfterOption display={display}/>}
          />
        );
      })}
      {
        optionData && (
          <Cell key={displays.length + 1} text={optionData.title} />
        )
      }

    </TableRow>
  );
}
RowTitle.defaultProps = {
  displays: [],
};
export default memo(RowTitle);
