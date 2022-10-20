import { memo } from 'react';
import { Menu } from '@mui/material';
import PropTypes from 'prop-types';

import styles from './Dropdown.module.css';
import ItemComponent from './DropdownItem';

function DropdownComponent({ data, open, anchorEl, classes, ...props }) {
  return (
    <Menu
      open={Boolean(anchorEl && open)}
      anchorEl={anchorEl}
      disablePortal
      classes={{
        ...classes,
        paper: styles.paper,
        list:styles.list
      }}
      {...props}
    >
      {Array.isArray(data) && data.map((item, index) => {
        return <ItemComponent key={index} data={item} />;
      })}
    </Menu>
  );
}
DropdownComponent.propTypes = {
  data:PropTypes.array,
  open:PropTypes.bool,
  anchorEl:PropTypes.object,
  classes:PropTypes.object
}
export default memo(DropdownComponent);
