import { memo, useState, useEffect, Fragment, useMemo } from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import styles from '../../Table.module.css';
import { TableCell, Stack } from '@mui/material/';
import CheckboxType from './Checkbox';
import ImageType from './Image';
import NumberType from './Number';
import DatetimeType from './Datetime';



import TextType from './Text';

function CellComponent({loading, type, display,data,text, beforeChild, afterChild }) {
  const Component = useMemo(() => {
    switch (type) {
      case 'checkbox': {
        return CheckboxType;
      }
      case 'image': {
        return ImageType;
      }
      case 'number': {
        return NumberType;
      }
      case 'datetime': {
        return DatetimeType;
      }
      default: {
        return TextType;
      }
    }

    return TableCell
  }, [type]);
  if (display?.hidden) {
    return <></>;
  } else {
    return (
      <TableCell
        align="center"
        data-type={type}
        data-name={display.name}
        sx={{ whiteSpace: 'nowrap' }}
        className={clsx(styles.cell)}
      >
        <Stack
          direction="row"
          justifyContent="center"
          alignItems="center"
          sx={{minWidth:display?.width ?? 'auto'}}
        >
          {beforeChild}
          <Component text={text} data={data} display={display} loading={loading}/>
          {afterChild}
        </Stack>
      </TableCell>
    );
  }
}

CellComponent.propTypes = {};
CellComponent.defaultProps = {};
export default memo(CellComponent);
