import { memo } from 'react';
import PropTypes from 'prop-types';
import { MenuList } from '@mui/material';
import ItemComponent from './DropdownItem';
function DropdownListComponent({ data }) {
  return (
    <MenuList className={'fullwidth'}>
      {data.map((item, index) => {
        return <ItemComponent key={index} data={item} />;
      })}
    </MenuList>
  );
}
DropdownListComponent.propTypes = {
  data: PropTypes.array,
};
export default memo(DropdownListComponent);
