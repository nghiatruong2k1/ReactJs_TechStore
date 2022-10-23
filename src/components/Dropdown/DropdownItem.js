import { memo } from 'react';
import PropTypes from 'prop-types';
import ListComponent from './DropdownList';
import ButtonComponent from './DropdownButton';
import { ListItem } from '@mui/material';
function DropdownItemComponent({ children, data }) {
  const isList = Array.isArray(data);
  return (
    <ListItem disablePadding divider={isList}>
      {children || (isList && <ListComponent data={data} />) || (
        <ButtonComponent {...data} />
      )}
    </ListItem>
  );
}
DropdownItemComponent.propTypes = {
  data: PropTypes.oneOfType([PropTypes.array, PropTypes.object]),
};
export default memo(DropdownItemComponent);
