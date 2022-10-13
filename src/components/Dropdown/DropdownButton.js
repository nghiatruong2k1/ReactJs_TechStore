import { memo, useRef,useMemo } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { ListItemButton, ListItemIcon, ListItemText } from '@mui/material';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useDisclosure } from '@mantine/hooks';
import DropdownComponent from './Dropdown';
import { faChevronRight } from '@fortawesome/free-solid-svg-icons';
import styles from './Dropdown.module.css';
function DropdownButtonComponent({ to, icon, endIcon, text,onClick, data }) {
  const [isOpen, { close, open }] = useDisclosure(false);
  const ref = useRef();
  return (
    <>
      <ListItemButton
        ref={ref}
        onClick={()=>{data && open();onClick && onClick()}}
        component={to ? Link : 'button'}
        to={to}
        sx={{ py: 0.5 }}
      >
        <ListItemIcon>
          {icon}
        </ListItemIcon>
        <ListItemText className={styles.text}>{text}</ListItemText>
        <ListItemIcon>
          {data && (
            endIcon || <FontAwesomeIcon icon={faChevronRight} />
          )}
        </ListItemIcon>
      </ListItemButton>
      {data && (
        <DropdownComponent
          anchorEl={ref.current}
          open={isOpen}
          onClose={close}
          data={data}
          anchorOrigin={{
            horizontal: 'left',
            vertical: 'top',
          }}
          transformOrigin={{
            horizontal: 'right',
            vertical: 'top',
          }}
        />
      )}
    </>
  );
}
DropdownButtonComponent.propTypes = {
  to:PropTypes.string,
  icon:PropTypes.object,
  endIcon:PropTypes.object,
  text:PropTypes.string,
  data:PropTypes.array
}

export default memo(DropdownButtonComponent);
