import { memo, useMemo } from 'react';
import clsx from 'clsx';
import styles from '../../Table.module.css';
import { TableCell, Stack } from '@mui/material/';
import CheckboxType from './Checkbox';
import ImageType from './Image';
import NumberType from './Number';
import DatetimeType from './Datetime';
import OptionType from './Option';
import TextType from './Text';
import PropTypes from 'prop-types';

const types = {
  checkbox: CheckboxType,
  image: ImageType,
  number: NumberType,
  datetime: DatetimeType,
  option: OptionType,
  text: TextType,
};
function CellComponent({
  loading,
  type,
  display,
  data,
  text,
  beforeChild,
  afterChild,
  title
}) {
  const Component = useMemo(() => {
    return types[type] ?? type.text;
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
          sx={{ minWidth: display?.width ?? 'auto' }}
        >
          {beforeChild}
          <Component
            text={text}
            data={title === false ? data : {}}
            display={title === false ? display : {}}
            loading={loading}
          />
          {afterChild}
        </Stack>
      </TableCell>
    );
  }
}

CellComponent.propTypes = {
  type:PropTypes.oneOf(Object.keys(types)),
  title:PropTypes.bool
};
CellComponent.defaultProps = {
  display: {},
  type:'text',
  title:false
};
export default memo(CellComponent);
